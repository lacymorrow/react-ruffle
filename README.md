<div align="center">
  <a href="https://github.com/lacymorrow/react-ruffle">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo-horizontal-dark.svg">
      <img src=".github/assets/logo-horizontal.svg" alt="react-ruffle" width="360">
    </picture>
  </a>

  <p><strong>Render Flash content in React</strong> ➔ a thin wrapper around the Rust-powered <a href="https://ruffle.rs/">Ruffle</a> emulator.</p>

  <p>
    <a href="https://www.npmjs.com/package/react-ruffle"><img alt="npm version" src="https://img.shields.io/npm/v/react-ruffle?style=flat"></a>
    <a href="https://www.npmjs.com/package/react-ruffle"><img alt="npm downloads" src="https://img.shields.io/npm/dm/react-ruffle?style=flat"></a>
    <a href="https://github.com/lacymorrow/react-ruffle/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/lacymorrow/react-ruffle/ci.yml?style=flat&label=CI"></a>
    <a href="./LICENSE"><img alt="License" src="https://img.shields.io/npm/l/react-ruffle?style=flat"></a>
    <a href="https://www.chromatic.com/component?appId=65328f2ac70fb72ddb74ff4b&csfId=lacymorrow-react-ruffle"><img alt="Storybook" src="https://img.shields.io/badge/Storybook-demo-ff4785?style=flat"></a>
  </p>
</div>

---

> [!NOTE]
> [Ruffle](https://ruffle.rs/) is a Flash Player emulator built in Rust. `react-ruffle` is a small React component that creates and manages a Ruffle player instance — that's it. The heavy lifting belongs to Ruffle.

## Features

- Renders SWF / ActionScript content inside a React component
- Click-to-play with fallback content while the WASM loads
- Optional `onFSCommand` callback for Flash-to-JavaScript communication
- Passes any Ruffle config option straight through
- React 18 **and** 19 supported

## Install

```bash
npm install react-ruffle
```

## Usage

```jsx
import { Flash } from "react-ruffle";

<Flash src="path/to/my.swf" />;
```

### With config and fallback content

```jsx
<Flash
  src="path/to/my.swf"
  config={{
    autoplay: "off",
    parameters: {
      // FlashVars
    },
  }}
>
  <p>Loading Flash content…</p>
</Flash>
```

### Flash-to-JavaScript

```jsx
<Flash
  src="path/to/my.swf"
  onFSCommand={(command, args) => {
    console.log("FSCommand:", command, args);
    return true;
  }}
/>
```

> [!TIP]
> Live interactive demo on [Chromatic / Storybook](https://www.chromatic.com/component?appId=65328f2ac70fb72ddb74ff4b&csfId=lacymorrow-react-ruffle).

> [!NOTE]
> `<Flash />` and `<Ruffle />` are **aliases** — import whichever name reads better in your codebase.

## API

### `<Flash />` (alias: `<Ruffle />`)

| Prop | Type | Required | Description |
|---|---|:---:|---|
| `src` | `string` | ✅ | Path or URL to a `.swf` file |
| `config` | `object` | | Forwarded to the Ruffle player. See [Ruffle's load options](https://ruffle.rs/js-docs/master/interfaces/BaseLoadOptions.html). |
| `onFSCommand` | `(command: string, args: string) => boolean` | | Receives FSCommand calls from Flash. See [Ruffle's player API](https://ruffle.rs/js-docs/master/classes/RufflePlayer.html). |
| `children` | `ReactNode` | | Rendered while the Ruffle engine is initializing. Once the player instance is ready (which happens before SWF content actually plays), the children are replaced by the player container. |

Any other props are forwarded to the wrapper `<div>`.

## Breaking changes in v2

- The component now renders a `<div>` rather than an `<object>`. Old `<object>`-specific props (e.g. raw `data`) are no longer supported — use `src` and `config` instead.
- The component drives Ruffle directly via `window.RufflePlayer.newest()` rather than relying on Ruffle's automatic `<object>` detection.
- Peer dependency: `react >= 18` (supports 18 and 19).

## Playground

➔ **[Open in StackBlitz](https://stackblitz.com/github/lacymorrow/react-ruffle/tree/main/examples/stackblitz?file=src/main.tsx)** — minimal Vite + React + TS demo rendering a public-domain SWF via `<Flash />`.

Local copy: [`examples/stackblitz/`](./examples/stackblitz)

## Related

- [Ruffle](https://ruffle.rs/) — the actual Flash emulator.
- Other utilities by the author: [shipx](https://github.com/lacymorrow/shipx) · [react-is-online-context](https://github.com/lacymorrow/react-is-online-context) · [react-github-readme-md](https://github.com/lacymorrow/react-github-readme-md).

## Acknowledgments

- The [Ruffle team](https://github.com/ruffle-rs/ruffle) — for keeping Flash content alive in a post-Flash world.

## License

[MIT](./LICENSE) © [Lacy Morrow](https://lacymorrow.com)

<div align="center">
  <sub>If this saved you time, consider <a href="https://github.com/sponsors/lacymorrow">sponsoring on GitHub</a>, <a href="https://patreon.com/lacymorrow">supporting on Patreon</a>, or <a href="https://buymeacoffee.com/lm">buying a coffee</a>.</sub>
</div>
