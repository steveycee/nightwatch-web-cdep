module.exports = {
  'Should go to a product page and add to basket': function (browser) {
    const productPage = browser.page.product_page_po();

    productPage.navigate()
      .assert.urlContains('/product/')
      .click({selector: '@addToBasketButton', index:1}, function(result){})
      .assert.visible('@slideOutDrawer')
      .assert.visible('@slideOutDrawer_goToBasket') // removing this causes the click to fail, race condition?
      .click('@slideOutDrawer_goToBasket')
      .assert.urlContains('checkout.ao.com')
    browser.end();
  }
};