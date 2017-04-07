# nw-blueprint [![Build Status](https://travis-ci.org/justlep/nw-blueprint.svg?branch=master)](https://travis-ci.org/justlep/nw-blueprint)
A project-blueprint for quickly building NWJS-based applications using Grunt, LESS, Pug and Knockout (or any other JS libraries).
Based on NodeJS and Node-Webkit. Compileable to a standalone program (per default Win/64),
but should easily be adjustable for Linux/Mac.

## Install

```sh
$ npm install
```

## Run locally (developer tools enabled via F12)
```sh
$ grunt runDebug
# optional watchers to auto-rebuild CSS/HTML when .less or .pug files are modified
$ grunt watchLessAndPug
```

## Build standalone application (no developer tools)
```sh
$ grunt buildApp
```

After the successful build, the executable standalone application is located in 
* **build/nw-blueprint-app/<platform>/**

## Configuration / Customization
* The build platform (OS) and NWJS-version are defined in the `config`-section of [/package.json](./package.json)
   * Allowed platforms: `'win32', 'win64', 'osx32', 'osx64', 'linux32', 'linux64'`  
     See: https://github.com/nwjs/nw-builder
* The App's name, window settings etc. are located in the app manifest file, [src/package.json](./src/package.json)
