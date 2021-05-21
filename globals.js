const request = require("request");

const hasPassed = ({ errors, failed } = { errors: 0, failed: 0 }) =>
  errors === 0 && failed === 0;

module.exports = {
  sessionId: null,

  // Before each suite rather than test
  beforeEach(browser, done) {
    // Store session for reporting success / failure
    browser.session((session) => {
      this.sessionId = session.sessionId;
      done();
      console.log("BEFORE EACH TEST WORKING");
      console.log(session.sessionId);
    });
  },

  afterEach(browser, done) {
    // Report success / fail to Browserstack
    if (this.sessionId) {
      const status = hasPassed(browser.currentTest.results)
        ? "passed"
        : "failed";

      request({
        uri: `https://${process.env.BROWSERSTACK_USER}:${process.env.BROWSERSTACK_KEY}@api.browserstack.com/automate/sessions/${this.sessionId}.json`,
        method: "PUT",
        form: {
          status,
          // not used
          reason: "",
        },
      });
    }
    console.log("SESSIONID " + this.sessionId);
    console.log(browser.currentTest.results);
    done();
  },
};
