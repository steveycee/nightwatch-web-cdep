require("dotenv").config();
nightwatch_config = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],

  selenium: {
    start_process: false,
    host: "hub-cloud.browserstack.com",
    port: 443,
  },

  common_capabilities: {
    build: "ao.qae.bsdemo.nwjs",
    "browserstack.user": process.env.BROWSERSTACK_USERNAME,
    "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
    "browserstack.debug": true,
  },

  test_settings: {
    default: {},
    chrome: {
      desiredCapabilities: {
        browser: "chrome",
        os: "Windows",
        os_version: "10",
        browserName: "Chrome",
        browser_version: "latest",
      },
    },
    firefox: {
      desiredCapabilities: {
        browser: "firefox",
        os: "Windows",
        os_version: "10",
        browserName: "Firefox",
        browser_version: "latest",
      },
    },
    safari: {
      desiredCapabilities: {
        browser: "safari",
        os: "OS X",
        os_version: "Big Sur",
        browserName: "Safari",
        browser_version: "latest",
      },
    },
    ie: {
      desiredCapabilities: {
        browser: "internet explorer",
        os: "Windows",
        os_version: "10",
        browserName: "IE",
        browser_version: "latest",
      },
    },
  },
};

for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config["selenium_host"] = nightwatch_config.selenium.host;
  config["selenium_port"] = nightwatch_config.selenium.port;
  config["desiredCapabilities"] = config["desiredCapabilities"] || {};
  for (var j in nightwatch_config.common_capabilities) {
    config["desiredCapabilities"][j] =
      config["desiredCapabilities"][j] ||
      nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
