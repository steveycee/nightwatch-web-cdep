module.exports = {
  "My first test case"(browser) {
    browser
      .url("http://steveycee.com/")
      .waitForElementVisible(".header-head")
      .assert.containsText(".header-head", "../steveycee/..");
  },
};
