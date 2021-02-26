# nidoca framework (nidoca-core)

## Introduction

nidoca is a lightweight ui-framework based on
[webcomponents](https://www.webcomponents.org/),
[typescript](https://www.typescriptlang.org/)
and [litelement](https://lit-element.polymer-project.org/).

Visit showcase page: [nidoca.de](http://nidoca.de)

## Installation:

Installation with [npm](https://www.npmjs.com/package/@domoskanonos/nidoca-core):

    npm i @domoskanonos/nidoca-core

or refer directly in package.json:

    "dependencies": {
        "@domoskanonos/nidoca-core": "latest",
    }

### build showcase docker image
    docker build -t nidoca-showcase .

### push image to docker registry
    docker tag nidoca-showcase <registry-host>:5000/nidoca-showcase
    docker push <registry-host>:5000/nidoca-showcase

### after push, goto server and pull:
    docker pull localhost:5000/nidoca-showcase

### run docker image on server
    docker run -d -p 80:80 localhost:5000/nidoca-showcase
