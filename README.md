# Learn Nightwatch [![Codeship](https://img.shields.io/codeship/d9151e40-1473-0134-47e0-12348d1f3442.svg)](https://codeship.com/projects/157818) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/learn-nightwatch/issues)

_**Automate** your **acceptance tests** and run them in **real browsers**_!

![nightwatch-logo-with-slogan](https://cloud.githubusercontent.com/assets/194400/16045809/099207e2-3242-11e6-99d4-99b227d7a38a.png)

## _Why_?

Testing what the people _using_ your application/website will _see_
and their ability _interact_ with the product is
(_probably_) the most important part of building a web app/site.
You can have amazing code, a super-fast backend and cutting-edge Virtual DOM UI,
but _none_ of that _matters_ if people are unable to _use_ it
because of a basic bug!

![dilbert-internet-full](https://cloud.githubusercontent.com/assets/194400/16302737/b0bb3486-3944-11e6-9875-6e691587ccd0.png)

_**User Acceptance Testing**_ (**UAT**) with a tool like Nightwatch (_Selenium_)
lets you to run real-world scenarios in your Web App which will give
you _confidence_ that the app _works_ in the chosen device/browser.

## _What_?

_**Automated Acceptance Testing** using **Real Browsers**_.

Nightwatch is _quick_ to setup and the tests/scenarios are _easy_ to write.

> We _exhaustively_ read through all the tutorials, blog posts and documentation
for Nightwatch (_including the mailing list & StackOverflow Q&A_)
and have condensed our findings into this step-by-step guide.  
We hope you find it _useful_ and decide to use it for your web app/site!  
_**Please**_ give us _**feedback**_ and if you _get stuck_,
[_**tell us!**_](https://github.com/nelsonic/learn-nightwatch/issues)

#### Background Links

+ Nightwatch website: http://nightwatchjs.org/
+ Github: https://github.com/nightwatchjs/nightwatch
+ Guide/docs: https://github.com/nightwatchjs/nightwatch-docs
(_don't be put off by the lack of docs, we're here to help if you get stuck!_)

## _Who_?

Who should learn/use Nightwatch?

+ **Developers** - People writing code, building web apps needing to
check that _everything_ works as expected.
+ **QA** - Quality Assurance people who have to _manually "click-test"_ apps/sites.
+ "**Testers**" - Many organisations _still_ have people who's job
is to write tests for software.

## _How_?

### _Quick Start (5mins)_

_**Try it**_ on your local machine in 5 mins by following these _**3 easy steps**_:


### 1. Clone

Clone the repository by _copy-pasting_ the following command into your terminal:

```sh
git clone https://github.com/nelsonic/learn-nightwatch.git && cd learn-nightwatch
```

### 2. Install<sup>1</sup>

Install the *required* dependencies
including Selenium Server and `chromedriver`:

```sh
npm install
```


### 3. Run (_tests_)<sup>2</sup>

Run the Nightwatch tests:

```sh
npm test
```


You should expect to see:  
![learn-nightwatch-console-output-success](https://cloud.githubusercontent.com/assets/194400/16376918/f2d9f8c0-3c5a-11e6-96c4-88e0bdb44638.png)

Once you see the tests pass you are well on your way
to testing with Nightwatch!


<sup>1</sup><small>This _assumes_ you have node.js installed.
If not, https://nodejs.org/en/download/ </small>  
<sup>2</sup><small>Selenium Requires Java/JDK see: [Java Installation section](https://github.com/nelsonic/learn-nightwatch#installing-java-runtime-environment-jre) below. (_don't worry, you'll be up-and-running shortly..._!)
Once you have Java installed re-run the Nightwatch tests (`npm test`).</small>

<br />

## *Step-by-Step Tutorial*

Now that you've had a _taste_ for running tests with Nightwatch,
let's walk through each of the steps to get this working in _your_ project.

### Installation (_in detail_)

First install the `nightwatch` node.js module from NPM:

```sh
npm install nightwatch --save-dev
```

> <small>**Note**: while the Nightwatch docs instruct to install _globally_ (`-g`),
we _prefer_ to always install devDependencies _locally_ to the project
and list them _explicitly_ in `package.json` so it's _clear_ to everyone
viewing/using the project _exactly_ which version is required to run the tests. </small>


#### Selenium (_Web Driver_) Standalone Server

In order to run Browser tests Nightwatch uses Selenium.
We _prefer_ to _automate_ the installation of Selenium using
[`selenium-download`](https://www.npmjs.com/package/selenium-download)
which ensures that we always have the latest version.

```js
var selenium = require('selenium-download');  
selenium.ensure('./bin', function(error) {  
   if (error) {
      return callback(error);
   }
});
```
>
> <small>If you prefer to install Selenium *manually* see:
 [learn-nightwatch#**manual-selenium-install**](https://github.com/nelsonic/learn-nightwatch#manual-selenium-install)</small>

### Setup

Nightwatch test runner expects to find a `nightwatch.json` file at the root
of your project, create it and paste the _default_ configuration from
http://nightwatchjs.org/guide#settings-file

The default is to look for tests in the `/tests` folder of your project;
you can change this to what ever you prefer.


### _Optional_ Upload Screenshots to S3

If you want the screenshots of tests to be uploaded to S3,
you will need to have the following environment variables declared:
```sh
export AWS_S3_BUCKET=yourbucket
export AWS_REGION=eu-west-1
export AWS_ACCESS_KEY_ID=IDHERE
export AWS_SECRET_ACCESS_KEY=YOURKEY
# to run your tests on SauceLabs you need to set the following variables:
export SAUCE_USERNAME=yourusername
export SAUCE_ACCESS_KEY=private_key
```
<br />

### CI

Running your Nightwatch tests on CI is easy on CodeShip.
We usually set the required (_minimum_) node version in our
`package.json` e.g:
```js
"engines": {
  "node": "4.4.6"
},
```
Once you have the desired version of node installed.

Setup Commands:
```js
# install all dependencies:
npm install
```
Test Command:
```js
# run tests
npm test
```
That's it.

> ***Note***: while the tests run seamlessly on CodeShip we were unable
 to get Selenium standalone working on Travis-CI
if you have time to ***help us***, please see:
https://github.com/nelsonic/learn-nightwatch/issues/8

<br /> <br />

# tl;dr

> More detail than you will _probably_ need ... _but we're keeping for completeness_.

## Background

### Research

+ Basic intro: http://juristr.com/blog/2014/02/nightwatch-test-automation/
+ Page Object Pattern: http://martinfowler.com/bliki/PageObject.html
+ Nightwatch with React: https://www.syncano.io/blog/testing-syncano/
+ How to run a _single_ Nightwatch test: http://stackoverflow.com/questions/28308990/how-to-run-a-single-test-in-nightwatch/29701199#29701199
+ Custom Commands: http://nightwatchjs.org/guide#writing-custom-commands
+ Nightwatch Global Variables:
http://stackoverflow.com/questions/25067391/how-to-make-a-globally-accessible-variable/
+ Travis with Saucelabs: http://samsaccone.com/posts/testing-with-travis-and-sauce-labs.html
+ Selenium Status:
http://stackoverflow.com/questions/6517501/selenium-2-how-to-check-that-server-is-running-and-stop-the-server
+ Silence Selenium on Travis:
http://andrew.yurisich.com/work/2014/08/30/silence-noisy-selenium-server-output-in-travis-ci/
+ Intro by @mikberg: https://medium.com/@mikaelberg/zero-to-hero-with-end-to-end-tests-using-nightwatch-saucelabs-and-travis-e932c8deb695
+ Intro (Angular-focussed): http://g00glen00b.be/e2e-testing-nightwatch-js/
+ Nightwatchjs: how to check if element exists without creating an error/failure/exception
http://stackoverflow.com/questions/31687027/nightwatchjs-how-to-check-if-element-exists-without-creating-an-error-failure-e
+ Can I create reusable test steps in nightwatch.js?
http://stackoverflow.com/questions/31388280/can-i-create-reusable-test-steps-in-nightwatch-js

#### Why Nightwatch instead of `xyz`...?

We _first_ looked at [`NightmareJS`](https://github.com/segmentio/nightmare),
and even though it _looks_ really good (_fast_), we saw the _reaction_
non-technical people had when we mentioned it and did not want to have to _explain_
the _name_ to people/clients every time, so instead opted for _night**watch**_.
If _night**mare**_ ever change their name, we _could re-consider_ it.

<br />

### Setup (*Detail*)

#### Installing Java (_Runtime Environment JRE_)

If you see the following message while trying to run the tests:
![learn-nightwatch-java-not-installed](https://cloud.githubusercontent.com/assets/194400/16425985/0e2a9e5e-3d5f-11e6-9bf0-d2eebcd97c2b.png)

While we prefer _not_ to run `Java` on our machines for
[_security reasons_](http://krebsonsecurity.com/tag/java/) Selenium is _still_
the best way of running tests in _real_ browsers.

_Check_ if you have `Java` installed on your local machine:

> How do I install Java? https://www.java.com/en/download/help/download_options.xml
> pick your Operating System and follow the instructions

##### Mac OSX? (_use homebrew_)

If you haven't updated `brew` in a while, do that first:
```sh
brew update
```
That will install [`cask`](https://caskroom.github.io/) which is now _part_ of Homebrew.

Now you can install Java:
```sh
brew cask install java
```
You should see something like this:
![install-java-with-homebrew-cask](https://cloud.githubusercontent.com/assets/194400/16007040/296f1bfc-3168-11e6-8009-8f39b715239d.png)

> See: [http://stackoverflow.com/questions/24342886/how-to-**install-java-8**-on-**mac**](http://stackoverflow.com/questions/24342886/how-to-install-java-8-on-mac)

#### Manual Selenium Install

If you prefer to install it _manually_ that's an option.

> Visit: http://www.seleniumhq.org/download/ and download the latest version.

When downloading the `selenium-server-standalone-2.53.0.jar`
you _may_ see a _warning_ in your browser:  
![download-selenium-chrome-warning](https://cloud.githubusercontent.com/assets/194400/16004469/b865583a-3159-11e6-9b6a-40bd754ef209.png)  
Click on "keep" to save the file.
Once you have it, put it in the `bin` directory of your project
and re-name it to `selenium.jar` (_without the version number_).


### Saucelabs

![browser logos](https://cloud.githubusercontent.com/assets/194400/16362868/8c29b448-3bb1-11e6-83f1-380edd462fb1.png)

Most people _building_ web apps/sites don't have _easy_ access
to _several_ devices/browsers to test their output, if you
need to test in a _range_ of browsers

+ Nightwatch on ***Saucelabs***: https://github.com/saucelabs-sample-test-frameworks/JS-Nightwatch.js


### StackOverflow Questions

Remind me to Respond to these:
> + [ ] http://stackoverflow.com/questions/24314040/getting-started-with-nightwatch-js
> + [ ] http://stackoverflow.com/questions/37699036/is-it-possible-to-start-a-selenium-server-inside-travis
> + [ ] http://stackoverflow.com/questions/25919673/file-upload-testing-in-nightwatch-js
> + [ ] http://stackoverflow.com/questions/31388280/can-i-create-reusable-test-steps-in-nightwatch-js/31393249#31393249
> + [ ] use saucelabs with nightwatch? http://stackoverflow.com/questions/36137270/how-to-use-saucelabs-with-nightwatch
> + [x] keypress: http://stackoverflow.com/questions/31812935/nightwatch-testing-sendkeys-and-keys-not-sending-key-clicks ... [*answer*](http://stackoverflow.com/questions/31812935/nightwatch-testing-sendkeys-and-keys-not-sending-key-clicks/37950264#37950264)
> + [x] Run Selenium as child process: http://stackoverflow.com/questions/27408864/cant-launch-selenium-phantomjs-ghostdriver-as-child-processes
> + [x] Current running browser: http://stackoverflow.com/questions/38102543/when-running-nightwatch-js-test-how-can-i-get-the-name-of-browser-currently-runn

## Cons (_of using Nightwatch_)

+
