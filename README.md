# Learn Nightwatch [![Codeship](https://img.shields.io/codeship/d9151e40-1473-0134-47e0-12348d1f3442.svg?maxAge=2592000)](https://codeship.com/projects/157818)

Automate your acceptance tests and run them in _real_ browsers!

![nightwatch-logo-with-slogan](https://cloud.githubusercontent.com/assets/194400/16045809/099207e2-3242-11e6-99d4-99b227d7a38a.png)


## _Why_?

Testing what the people _using_ your application/website will _see_
and their ability _interact_ with the product is
(_probably_) the most important part of building a web app/site.
You can have amazing code, a super-fast backend and blazing virtual DOM UI,
but _none_ of that _matters_ if the person is unable to _use_ it!

## _What_?

+ Site: http://nightwatchjs.org/
+ Github: https://github.com/nightwatchjs/nightwatch

## _How_?

### 1. Clone

```sh
git clone https://github.com/nelsonic/learn-nightwatch.git && cd learn-nightwatch
```

### 2. Install

```sh
npm install
```
<small>
That will instal *all required* dependencies and *start* the local selenium server.  
If you get an error, you might not have Java installed, see:
[_install Java_](https://github.com/nelsonic/learn-nightwatch#installing-java-runtime-environment-jre)
</small>



### 3. Run (_tests_)

```sh
npm test
```

You should expect to see:  
![learn-nightwatch-sample-test-run](https://cloud.githubusercontent.com/assets/194400/16112379/ffa5df92-33ae-11e6-88f5-b9204d7e6a78.png)

> _If the tests fail, please **tell us**_!


### _Optional_

If you want the screenshots of your tests to be uploaded to S3,
you will need to have the following environment variables declared:
```sh
export AWS_S3_BUCKET=yourbucket
export AWS_REGION=eu-west-1
export AWS_ACCESS_KEY_ID=IDHERE
export AWS_SECRET_ACCESS_KEY=YOURKEY
```


<br />


### Installation (_in detail_)

First install the `nightwatch` node.js module from NPM:

```sh
npm install nightwatch --save-dev
```

> <small>**Note**: while the Nightwatch docs instruct to install _globally_ (`-g`),
we _prefer_ to always install devDependencies _locally_ to the project
and list them _explicitly_ in `package.json` so it's _clear_ to everyone
viewing/using the project what is required to run the tests. </small>


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

### CI

Running your Nightwatch tests on CI is easy on CodeShip.

Setup Commands:
```js
# install your desired Node.js version:
nvm install 4.4.5
# install all dependencies:
npm install
```
Test Command:
```js
# run tests
npm test
```
That's it.


<br /> <br />

# tl;dr

> More detail than you will _probably_ need ... _but we're keeping for completeness_.

### Background

## Research

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


#### Why Nightwatch instead of `xyz`...?

We _first_ looked at [`NightmareJS`](https://github.com/segmentio/nightmare),
and even though it _looks_ really good (_fast_), we saw the _reaction_
non-technical people had when we mentioned it and did not want to have to _explain_
the _name_ to people/clients every time, so instead opted for _night**watch**_.
If _night**mare**_ ever change their name, we _could re-consider_ it.

<br />

### Setup (*Detail*)

#### Manual Selenium Install

If you prefer to install it _manually_ that's an option.

> Visit: http://www.seleniumhq.org/download/ and download the latest version.

When downloading the `selenium-server-standalone-2.53.0.jar`
you _may_ see a _warning_ in your browser:  
![download-selenium-chrome-warning](https://cloud.githubusercontent.com/assets/194400/16004469/b865583a-3159-11e6-9b6a-40bd754ef209.png)  
Click on "keep" to save the file.
Once you have it, put it in the `bin` directory of your project
and re-name it to `selenium.jar` (_without the version number_).

#### Installing Java (_Runtime Environment JRE_)

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

### StackOverflow Questions

Remind me to Respond to these:
> + [ ] http://stackoverflow.com/questions/24314040/getting-started-with-nightwatch-js
> + [ ] http://stackoverflow.com/questions/37699036/is-it-possible-to-start-a-selenium-server-inside-travis
> + [ ] http://stackoverflow.com/questions/25919673/file-upload-testing-in-nightwatch-js
> + [ ] http://stackoverflow.com/questions/31388280/can-i-create-reusable-test-steps-in-nightwatch-js/31393249#31393249
> + [x] keypress: http://stackoverflow.com/questions/31812935/nightwatch-testing-sendkeys-and-keys-not-sending-key-clicks ... [*answer*](http://stackoverflow.com/questions/31812935/nightwatch-testing-sendkeys-and-keys-not-sending-key-clicks/37950264#37950264)
> + [x] Run Selenium as child process: http://stackoverflow.com/questions/27408864/cant-launch-selenium-phantomjs-ghostdriver-as-child-processes
