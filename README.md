## Intro

Do you want to know what the weather will be like in Moscow?

That's easy!

Just go [here](http://greatweather.herokuapp.com) to find out – might take a few seconds to wake up the dyno (also, no `https` for now please!).

Or – follow the setup instructions below.


## Setup

1. Clone repo.
2. Run `npm install` (this also builds the app via `postinstall` hook).
3. `npm start` starts local web server that serves the web app.
4. Go to `http://localhost:8000`.


## Known issues

* Messy git history, sorry!
* Accessing page on Heroku via HTTPS currently does not work
* Need to check if summer/winter time transition will break current API response adapter
* Handle errors (e.g. bad API response) properly and report to user


## Future improvements

### Features

* Allow user to pick which city he wants to see the weather for!
* Show more information per tile (wind, humidity etc.)
* Read more into API docs to see what we can get out of it
* Nicer styling


### Tech, tooling

* Probably want to use Webpack (or Rollup) instead of home-cooked build scripts
* Want to run linter, tests on Travis CI
* Minification (and source maps)
* Pre-render views on server ('isomorphic' JavaScript)?
* Tests (unit tests and end-to-end tests via Protractor or Capybara)!
