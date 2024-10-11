const AppError = require('./AppError');

module.exports = class AssistantErrorsFactory {
    static ImageGenerationFailed() {
        return new AppError({
            message: "Image generation failed please try another prompt",
            statusCode: 400,
        });
    }
    static TokenLimit() {
        return new AppError({
            message: "You've run out of monthly limit.",
            statusCode: 400,
        });
    }
};
