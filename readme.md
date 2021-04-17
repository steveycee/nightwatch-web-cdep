# Nightwatch.js Web CDEP

## Quick start

- Clone this repo
- Open your tools of choice (I use VS code and its built in terminal)
- Go to your console/terminal and type `npm i`
- Still in the console type `npm t`
- A test _should_ run against ao.com (guess where I work right now?)

## Who this is for

This is a bit of a playground for me to add in and experiment with tools that might help a web application be more continuously deployable in an automated fashion.

TLDR: Explore ways to remove the need for manual testing creating time for exploratory testing and focus on other things.

If there's something interesting in here though its also for you. I'll try my best to do clear write ups of what I do, how I do it and why. Naturally if you've got any feedback please drop me a message on **[Twitter](https://twitter.com/steveycee)** 🐦

## Why NightwatchJS?

I started off on Cypress, I love Cypress and love the docs but I am also in a space at time of writing where there is a degree of need for cross browser testing outside of what Cypress currently allows. So I did some Googling and wanted to give NightwatchJS a try. This isn't an endorsement of NightwatchJS so much as its just an exploration of what can be achieved and how its done. I plan to go back to Cypress and keep a practice/playground in my Github as well.

So far though, despite some growing pains I'm starting to like NightwatchJS and while they may not yet be in this repo have seen some interesting stuff using it in conjunction with other tools like Browserstack

## TODO:

- Image diffing would be an interesting one to figure out
- Performance testing? can this be done in this context?
- Integration with cross platform cloud testing tools (like Browserstack)
- Who knows?!

## Image diffing

### VRT

Created a [branch for Visual Regression testing](https://github.com/steveycee/nightwatch-web-cdep/tree/image-diff-experiment) and started easy integrating NightwatchJS VRT

Advantages

- Nice and easy set up
- Appears reliable at this stage

Disadvantages

- Not necessarally right for CI/CD given how Chrome on Linux MAY render differently to Chrome on Windows or Mac OS resulting in false positives
- General bug bear of not having the option to screenshot diff in a life like end user iOS Safari scenario. Hardly a complaint about the package itself and more just a general lement that its tricky

To set up visit [here](https://www.npmjs.com/package/nightwatch-vrt).

Notes on set up:

- Make sure you copy and paste in the generate screenshot path function outside of your main module.exports (I'm sure it seems like a rookie mistake but it took me longer to figure it out than it probably should have)
- The example function and example config in the readme have 2 different names. Copy paste in the below into your `nightwatch.conf.js` for a slightly easier time.

```
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
```

and then outside of the module.exports block the following function

```
function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
  const moduleName = nightwatchClient.currentTest.module,
    testName = nightwatchClient.currentTest.name;

  return path.join(process.cwd(), basePath, moduleName, testName, fileName);
}
```

There should be 2 tests in there, a `demo_basic` and a `demo_vrt` with `demo_vrt` doing a basic test against a single selector as defined in the page objects for lister against ao.com. I kept in demo basic so you could see the comparison but more information on usage for the command can be found in the VRT projects [readme]('https://www.npmjs.com/package/nightwatch-vrt').

## Notes:

### To run just the one spec:

#### Windows

`npm t --test tests\YOURTESTNAME.js`

#### MacOS

`npm t --test tests/YOURTESTNAME.js`

e.g.

`npm t --test tests\demo.js`
