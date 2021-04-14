module.exports = {
    // TODO: Needs to be more resilient, can we get a product in a good way all the time at a low price?
    url: 'https://ao.com/product/myd82ba-apple-macbook-pro-with-touch-bar-laptop-space-grey-81027-251.aspx',
    elements: {
    
    // Two methods of clicking the nth thing: ---------------------
    // Defining it in the page object as below
    secondAddToBasketButton:{
        // https://nightwatchjs.org/guide/working-with-page-objects/defining-elements.html
        selector: 'a[data-tag-name="add to basket"]',
        index: 1 //this bad boy..
      }, 
    // Defining it in the test as in the comment below
    // .click({selector: '@addToBasketButton', index:1}, function(result){}) 
      addToBasketButton: 'a[data-tag-name="add to basket"]',
    
      // ---------------------

      slideOutDrawer: 'div[data-tag-section="basket attach"]',
      slideOutDrawer_goToBasket: 'a[data-tag-name="go to basket"]',
      productInformation: 'section[id="productInformation"]'
    }
  };