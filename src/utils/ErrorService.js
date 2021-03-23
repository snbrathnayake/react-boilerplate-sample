import Raven from 'raven-js';

// Service to send errors to Sentry
class ErrorService {
  capture(title, extra) {
    Raven.captureException(new Error(title), { extra });
  }
  setUserContext(context = {}) {
    Raven.setUserContext(context);
  }
  lastEventId() {
    return Raven.lastEventId();
  }
}

export default new ErrorService();
