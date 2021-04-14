module.exports = class findInStock {
    async command() {
      let returnValue;
      try {
        const lister = browser.page.lister_po();
        lister.assert.visible('@sidebar')
        // console.log('steve')
      } catch (err) {
        console.error('An error occurred', err);
        returnValue = {
          status: -1,
          error: err.message
        }    }
  
      return returnValue;  }
  }