module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require("chromedriver").path,
    cli_args: ["--verbose"],
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
