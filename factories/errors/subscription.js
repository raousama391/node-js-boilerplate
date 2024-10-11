const AppError = require('./AppError');

module.exports = class SubscriptionErrorsFactory {
  static CheckoutCreationFailed() {
    return new AppError({message: 'Checkout creation failed', statusCode: 400});
  }

  static UserAlreadySubscribed() {
    return new AppError({message: 'User already subscribed', statusCode: 400});
  }

  static SubscriptionNotFound() {
    return new AppError({message: 'Subscription not found', statusCode: 404});
  }

  static CardDeclined() {
    return new AppError({
      message:
        'Sorry, but there seems to be a problem with your payment card. Please update your card information to proceed',
      statusCode: 400,
    });
  }

  static InvoiceNotFound() {
    return new AppError({message: 'Invoice not found', statusCode: 404});
  }

  static MethodsNotFound() {
    return new AppError({
      message: 'Payment methods not found',
      statusCode: 404,
    });
  }

  static PaymentMethodError() {
    return new AppError({message: 'Payment method error', statusCode: 400});
  }

  static UnhandledEventErr() {
    return new AppError({message: 'Unhandled event', statusCode: 400});
  }
};
