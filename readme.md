# Nightwatch.js Web CDEP: Conditional Test Branch

## Quick start

- Clone this repo
- Open your tools of choice (I use VS code and its built in terminal)
- Go to your console/terminal and type `npm i`
- Still in the console type `npm t`
- A test _should_ run against ao.com (guess where I work right now?)

## Who this is for

This only thing this branch does is demonstrate a conditional test based on the properties of viewport (its width).

### The use case

In the case where we have 1 page that has an element visible on desktop but not on mobile and we want to use a single test script. You might want to use the one script when using Browserstack where you are firing up tests with against a list of different devices/viewports but haven't been too specific about having seperate mobile and desktop configs and scripts.

## Feedback

If you've got any feedback please drop me a message on **[Twitter](https://twitter.com/steveycee)** 🐦
