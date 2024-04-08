# Automated Accessibility Experiments

Supporting repo for [Will It Automate? Accessibility Testing](https://blog.scottlogic.com/2024/04/03/will-it-automate-accessibility-testing.html).

This repo contains some very basic experiments/examples for adding accessibility testing to your automated test suites.

## Setup

Clone/Download the repo and run:

```
$ yarn install
```

To run the screen reader tests you'll need to setup Guidepup:

```
$ npx @guidepup/setup
```

## Run the tests

### Unit

```
$ yarn test
```

### Playwright


```
$ yarn playwright test
```

## Run the app

```
$ yarn dev
```