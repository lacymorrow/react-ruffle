# react-ruffle [<img src="https://github.com/lacymorrow/crossover/raw/master/src/static/meta/patreon-button.webp" style="height:40px;" height="40" align="right" />](https://www.patreon.com/bePatron?u=55065733)
[![npm version](https://badge.fury.io/js/react-github-readme-md.svg)](https://badge.fury.io/js/react-github-readme-md) [![Maintainability](https://api.codeclimate.com/v1/badges/c3e8871f2b6009bd97e2/maintainability)](https://codeclimate.com/github/lacymorrow/react-github-readme-md/maintainability) [![Try movie-art on RunKit](https://badge.runkitcdn.com/react-github-readme-md.svg)](https://npm.runkit.com/react-github-readme-md)

> Render the README.md file of a GitHub Repository in React

[**Storybook Demo**](https://www.chromatic.com/component?appId=6528a9ef83709c394594fc93&csfId=lacymorrow-react-github-readme-md&buildNumber=5&k=6528ae3054fd2afdd25fb253-1200px-interactive-true&h=3&b=-1)

Try switching your system between light and dark mode or add a `.dark` class to a parent element to see the dark theme.

## Features
 * Supports both `light` and `dark` modes
 * Works in both the client and server


## Install

Using [NPM](https://npmjs.com):

```bash
$ npm install react-github-readme-md
```


## Usage
```js
import { GitHubReadme } from "react-github-readme-md";

// ...

<GitHubReadme username="lacymorrow" repo="react-github-readme-md" />
```


## API

### `props.username`

The GitHub username.

*Required*  
Type: `string`

#### `props.repo`

The specified GitHub repository where the `README.md` is located.

_Required_  
Type: `string`

#### `props.addHeadingIds`

Uses `marked-gfm-heading-id` to add `id` attributes to headings in the markdown so that `# Heading` becomes `<h1 id="heading">Heading</h1> and anchor links work.

_optional_  
Type: `boolean`
default: `true`

#### `props.linkify`

Uses `marked-linkify-it` to parse fuzzy links in the markdown like google.com and turn them into links.

_optional_  
Type: `boolean`
default: `false`


## Credit

Thanks to [Sindresorhus](https://github.com/sindresorhus) for his [`generate-github-markdown-css`](https://github.com/sindresorhus/generate-github-markdown-css) repo, used to generate the styles!

##### Also
- [marked](https://github.com/markedjs/marked)
- [marked-gfm-heading-id](https://www.npmjs.com/package/marked-gfm-heading-id)
- [marked-linkify-it](https://www.npmjs.com/package/marked-linkify-it)

## License
[MIT](http://opensource.org/licenses/MIT) © [Lacy Morrow](http://lacymorrow.com)
