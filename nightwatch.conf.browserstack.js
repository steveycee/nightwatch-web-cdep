require("dotenv").config();
const path = require("path");
nightwatch_config = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],

  selenium: {
    start_process: false,
    host: "hub-cloud.browserstack.com",
    port: 443,
  },

  globals_path: path.resolve(__dirname, "globals.js"),

  test_settings: {
    default: {
      desiredCapabilities: {
        build: "ao.qae.bsdemo.nwjs",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
        "browserstack.debug": true,
        osVersion: "11",
        deviceName: "iPhone 8 Plus",
        realMobile: "true",
        local: "false",
        browserName: "",
      },
    },
  },
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config["selenium_host"] = nightwatch_config.selenium.host;
  config["selenium_port"] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
