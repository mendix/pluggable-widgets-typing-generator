# Pluggable Widgets Typing Generator

![npm version](https://badge.fury.io/js/%40mendix%2Fpluggable-widgets-typing-generator.svg)
![Mendix 8](https://img.shields.io/badge/mendix-8.0.0-brightgreen.svg)
![Build Status](https://travis-ci.org/mendix/pluggable-widgets-typing-generator.svg?branch=master)

![NPM](https://nodei.co/npm/@mendix/pluggable-widgets-typing-generator.svg?downloads=true&stars=true)

## About

Typescript typing generator for Pluggable Widgets

## How to install

Install from npm using `npm install @mendix/pluggable-widgets-typing-generator`

## How to use

Make sure you are using gulp as your taskrunner.

-   Include the imported library in your gulpfile.js

```
const typingGenerator = require("@mendix/pluggable-widgets-typing-generator").typingGenerator;
```

or for gulp using Babel and ES2015 (gulpfile.babel.js) or Typescript (gulpfile.ts)

```
import typingGenerator from "@mendix/pluggable-widgets-typing-generator";
```

-   Create a Gulp Task to read the xml file and generate your typings

```
function generateTypings() {
    return gulp
        .src("./src/package.xml")
        .pipe(typingGenerator());
}
```
