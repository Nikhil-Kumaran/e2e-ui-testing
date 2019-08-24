# A simple restaurant app to explain end to end testing using jest and puppeteer [![CircleCI](https://circleci.com/gh/Nikhil-Kumaran/e2e-ui-testing/tree/master.svg?style=svg)](https://circleci.com/gh/Nikhil-Kumaran/e2e-ui-testing/tree/master)

> *I used react gatsby (just want to give it a try no specific reasons) to develop this application but the jest and puppeteer combo can be used to test any application that runs on the browser*

## Video example

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="./src/img/e2e-ui-testing.png">
    <source src="./src/videos/e2e-ui-testing.mp4" type="video/mp4">
  </video>
</figure>

## Usage

**You need to have node > 9**

### Install the dependencies

```sh
npm i
```

### Run the App

```sh
npm start
```

### Run the test cases

```sh
npm test
```

### Options to run the test cases

- **Headless mode (Default)**
This runs the test cases in the background parallelly. This is the default behaviour.

```sh
export HEADLESS=true
npm test
```

- **Non-Headless mode**
This runs the test cases in the foreground. The runInBand flag, runs the test in series. So that you can view the execution of one test case at a time. This is optional though.

```sh
export HEADLESS=false
npm test -- --runInBand
```
