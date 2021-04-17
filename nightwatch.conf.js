module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["page_objects"],
  // custom_commands_path: ["node_modules/nightwatch-vrt/commands", "commands"],
  custom_commands_path: ["node_modules/nightwatch-vrt/commands"],
  custom_assertions_path: ["node_modules/nightwatch-vrt/assertions"],

  // VRT

  default: {
    globals: {
      visual_regression_settings: {
        generate_screenshot_path: generateScreenshotFilePath,
        latest_screenshots_path: "vrt/latest",
        latest_suffix: "",
        baseline_screenshots_path: "vrt/baseline",
        baseline_suffix: "",
        diff_screenshots_path: "vrt/diff",
        diff_suffix: "",
        threshold: 0,
        prompt: false,
        always_save_diff_screenshot: false,
      },
    },
  },

  // Basic

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

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
  const moduleName = nightwatchClient.currentTest.module,
    testName = nightwatchClient.currentTest.name;

  return path.join(process.cwd(), basePath, moduleName, testName, fileName);
}
