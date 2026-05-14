# Contributing to react-ruffle

Thanks for considering a contribution!

## Setup

```bash
git clone https://github.com/lacymorrow/react-ruffle.git
cd react-ruffle
npm install
```

## Develop

```bash
npm run storybook         # Storybook on :6006
npm run rollup            # build to dist/
npm test                  # jest
```

## Conventions

- [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`).
- Keep PRs focused.
- The public API surface is `<Flash />` / `<Ruffle />` (they're aliases). Changes to props are a minor bump; renaming or removing them is a major bump.

## Releasing

```bash
npm run release            # rollup + npm publish
```

## Code of conduct

Be kind.
