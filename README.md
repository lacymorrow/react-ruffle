# react-ruffle [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/react-ruffle.svg)](https://badge.fury.io/js/react-ruffle) [![Maintainability](https://api.codeclimate.com/v1/badges/05ee4efc2d29918f2ba1/maintainability)](https://codeclimate.com/github/lacymorrow/react-ruffle/maintainability)


[![Test Coverage](https://api.codeclimate.com/v1/badges/c3e8871f2b6009bd97e2/test_coverage)](https://codeclimate.com/github/lacymorrow/react-ruffle/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/lacymorrow/react-ruffle/badge.svg)](https://snyk.io/test/github/lacymorrow/react-ruffle) [![Build Status](https://travis-ci.com/lacymorrow/react-ruffle.svg?branch=master)](https://travis-ci.com/lacymorrow/react-ruffle) [![Netlify Status](https://api.netlify.com/api/v1/badges/2b0b0b0a-4b0a-4b0a-8b0a-4b0a4b0a4b0a/deploy-status)](https://app.netlify.com/sites/react-ruffle/deploys)
> Render Flash media in React.JS

A React component for rendering Flash & ActionScript content using the Rust-based Ruffle emulator.

[**Storybook Demo**](https://www.chromatic.com/component?appId=6528a9ef83709c394594fc93&csfId=lacymorrow-react-ruffle&buildNumber=5&k=6528ae3054fd2afdd25fb253-1200px-interactive-true&h=3&b=-1)


## Features
 * Supports ActionScript and Flash media
 * Click to play animated content


## Install

Using [NPM](https://npmjs.com):

```bash
$ npm install react-ruffle
```


## Usage
```js
import { Flash } from "react-ruffle";

// ...

<Flash src="path/to/my.swf" />
```


## API

### `props.src`

The path to the Flash media file.

*Required*  
Type: `string`


## License
[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
