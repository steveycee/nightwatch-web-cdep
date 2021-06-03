module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path:
      "C:/Source/github/nightwatch-web-cdep/node_modules/iedriver/lib/iedriver/IEDriverServer.exe",
    // server_path: require("iedriver").path,
    cli_args: ["--verbose"],
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "internet explorer",
      },
    },
  },
};
