// Start by setting the width of the viewport you're interest in NOT doing the specific test on.
const LAYOUT_CHANGE_WIDTH = 414;

module.exports = {
  // Async is important so that we can use the await below on line
  "Conditional test Demo": async function (browser) {
    const examplePage = browser.page.example_page_po();

    examplePage.navigate();

    // THE CONDITIONAL TEST BIT:
    // varible awaiting the result of a promise, here we are triggering exectute as a promise.
    const isMobile = await browser.execute(
      // mobileWidth relates to LAYOUT_CHANGE_WIDTH as declared above and referenced in the [] array below on line..
      function (mobileWidth) {
        // Initalise a variable and set it to false
        let mobile = false;

        // The logic: simply put if the screen width is less than or greater than the mobile width then the mobile variable gets set to true
        if (window.screen.width <= mobileWidth) {
          mobile = true;
        }

        // Must return the value as below so we can use it outside of the execute block we are in here.
        return mobile;
      },

      // If I popped in multiple variables then they would come out in the order I put them in, so first declared above will be first in the array.
      [LAYOUT_CHANGE_WIDTH]
    );

    // We can now use isMobile to inform another if statement to decide whether we should look for the button or not.
    // isMobile is an object, .value allows us to access the value we want
    if (!isMobile.value) {
      examplePage.assert.visible("@button");
    }

    // After the above either runs or doesn't you can add more standard styles
    examplePage.assert.visible("body");

    browser.end();
  },
};
