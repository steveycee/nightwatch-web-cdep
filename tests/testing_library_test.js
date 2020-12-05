// https://testing-library.com/docs/nightwatch-testing-library/intro/

const { getQueriesFrom, within } = require("@testing-library/nightwatch");

module.exports = {
  //Using the before each allows us to chain together cases without needing to ask them to go to the website each time
  beforeEach(browser, done) {
    browser.url("http://steveycee.com/");
    done();
  },
  async "getByText within container"(browser) {
    browser.waitForElementVisible(".header-head");
  },
};

// TODO: Use extended testing library functionality
