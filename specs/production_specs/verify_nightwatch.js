module.exports = {
    'Go to ao.com'(browser) {
        browser
        .url('https://www.ao.com/')
        .assert.title('ao.com | Washing Machines | TVs | Laptops | Delivering Tomorrow');
    }
}