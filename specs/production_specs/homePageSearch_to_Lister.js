module.exports = {
  'Should be able to go to ao homepage, search and end up on a lister': function (browser) {
    
    const homePage = browser.page.homePage_po();
    const header = browser.page.header_po();
    const lister = browser.page.lister_po();
    
    const searchTerm = 'bar';

    homePage
      .navigate()

    header
      .assert.visible('@search')
      .setValue('@search', searchTerm)
      .click('@search_submit');

    lister
      .assert.visible('@productList')
      .assert.urlContains('/l/search/')

    browser.end();
  }
};