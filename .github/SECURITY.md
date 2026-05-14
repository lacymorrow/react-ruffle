# Security Policy

## Reporting a vulnerability

`react-ruffle` embeds the [Ruffle](https://ruffle.rs/) WASM emulator to render Flash content. The most security-relevant surfaces are:

- The bridge between React props/state and the Ruffle player instance
- Path handling of the `src` prop
- The `onFSCommand` callback (Flash-to-JS communication)

If you've found a security issue, please report it privately:

➔ https://github.com/lacymorrow/react-ruffle/security/advisories/new

Or email **lacy@lacymorrow.com** with `[react-ruffle security]` in the subject.

## Supported versions

Only the latest published version on npm receives security updates.

## Scope

In scope:
- The published `react-ruffle` npm package

Out of scope:
- Vulnerabilities in Ruffle itself — please report to [ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)
- Vulnerabilities in user-supplied SWF content (Ruffle's sandbox handles that)
