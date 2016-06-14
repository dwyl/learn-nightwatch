# Learn Nightwatch

Automate your acceptance tests and run them in _real_ browsers!

![nightwatch-logo-with-slogan](https://cloud.githubusercontent.com/assets/194400/16045809/099207e2-3242-11e6-99d4-99b227d7a38a.png)


## _Why_?

Testing what the people _using_ your application/website will _see_
and their ability _interact_ with the product is
(_probably_) the most important part of building a web app/site.
You can have amazing code, a super-fast backend and blazing virtual DOM UI,
but _none_ of that _matters_ if the person is unable to _use_ it!



## _How_?

### Installation

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
> <small>If you prefer to install Selenium *manually* see: </small>

### Setup

Nightwatch test runner expects to find a `nightwatch.json` file at the root
of your project, create it and paste the _default_ configuration from
http://nightwatchjs.org/guide#settings-file

The default is to look for tests in the `/tests` folder of your project;
you can change this to what ever you prefer.


<br /> <br />

# tl;dr

> More detail than you will _probably_ need ... _but we're keeping for completeness_.

### Background

## Research

+ Basic intro: http://juristr.com/blog/2014/02/nightwatch-test-automation/
+ Page Object Pattern: http://martinfowler.com/bliki/PageObject.html
+ Nightwatch with React: https://www.syncano.io/blog/testing-syncano/
+ How to run a _single_ Nightwatch test: http://stackoverflow.com/questions/28308990/how-to-run-a-single-test-in-nightwatch/29701199#29701199


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
> + [ ] http://stackoverflow.com/questions/25919673/file-upload-testing-in-nightwatch-js
> + [x] Run Selenium as child process: http://stackoverflow.com/questions/27408864/cant-launch-selenium-phantomjs-ghostdriver-as-child-processes
