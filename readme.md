# nidoca framework (nidoca-core)

## Introduction

nidoca is a lightweight ui-framework based on
[webcomponents](https://www.webcomponents.org/),
[typescript](https://www.typescriptlang.org/)
and [litelement](https://lit-element.polymer-project.org/).

visit showcase page: [nidoca.de](http://nidoca.de)

## Installation:

Installation is simple with [npm](https://www.npmjs.com/package/@domoskanonos/nidoca-core):

    npm i @domoskanonos/nidoca-core

or refer directly in package.json:

    "dependencies": {
        "@domoskanonos/nidoca-core": "latest",
    }

  /*"main": "source/index.js",*/


Package ohne inde:
  /**
 "main": "lib/index.js",
  "devDependencies": {
    "@domoskanonos/frontend-basis": "latest",
    "@types/node": "latest",
    "lit-element": "latest",
  "prettier": "latest",
     "typescript": "next"
  },
  **/


webpack dev und prod löschen, normalen dependencys leer, obige dev depencys durch die anderen erstetzen, index.css und index.html löschen




docker build -t nidoca .

