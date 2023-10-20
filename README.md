# react-ruffle [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/react-ruffle.svg)](https://badge.fury.io/js/react-ruffle) [![Maintainability](https://api.codeclimate.com/v1/badges/05ee4efc2d29918f2ba1/maintainability)](https://codeclimate.com/github/lacymorrow/react-ruffle/maintainability)

> Render Flash media in React.JS

A React component for rendering Flash & ActionScript content using the Rust-based Ruffle emulator.

[**Storybook Demo**](https://www.chromatic.com/component?appId=65328f2ac70fb72ddb74ff4b&csfId=lacymorrow-react-ruffle&buildNumber=2&k=6532904658dcf2e0c272b337-1200px-interactive-true&h=6&b=-1
)


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
