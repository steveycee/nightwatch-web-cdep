module.exports = {
    // src_folders: ['specs/beta_specs', 'specs/live_specs'],
    src_folders: ['specs/beta_specs'],
    page_objects_path: ['page_objects'],
    custom_commands_path: ['commands'],
  
    webdriver: {
      start_process: true,
      port: 9515,
      server_path: require('chromedriver').path,
      "cli_args": [
        "--verbose"
      ],
    },
  
    test_settings: {
      default: {
        desiredCapabilities : {
          browserName : 'chrome',
        }
      }
    }
  };