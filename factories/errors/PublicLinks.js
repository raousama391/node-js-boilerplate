const AppError = require('./AppError');

module.exports = class PublicLinksErrorsFactory {
    static fetchingLinkFailed() {
        return new AppError({message: 'The link is no longer valid or is broken.', statusCode: 500});
    }
    static creatingLinkFailed() {
        return new AppError({message: 'Failed to create link', statusCode: 500});
    }
}