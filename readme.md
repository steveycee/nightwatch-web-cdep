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

## Notes:

### To run just the one spec:

`npm t --test specs\demo.js`
