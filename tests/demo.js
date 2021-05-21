module.exports = {
  "Demo test": function (browser) {
    const examplePage = browser.page.example_page_po();

    examplePage.navigate().assert.visible("@button");

    browser.end();
  },
};
