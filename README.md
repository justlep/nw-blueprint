# nw-blueprint
A blueprint for quickly building NWJS-based applications using LESS, Pug and Knockout (or any other JS libraries).
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

After either build task, the executable standalone program is located in 
* **build/nw-blueprint-app/<platform>/**

Build platforms are defined in the config section of package.json.
Allowed platforms: ['win32', 'win64', 'osx32', 'osx64', 'linux32', 'linux64']
See: https://github.com/nwjs/nw-builder

