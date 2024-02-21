# Microfrontend Turborepo Zustand

Simple microfrontends app in Turborepo container with zustand as global state manager

## Tech Stacks:
- pnpm
- typescript
- nextjs
- turborepo
- zustand

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `main`: a Next.js application that showcases the main container
- `child`: an additional Next.js application that showcases the child app.
- `@repo/ui`: a stub React component library shared by both `main` and `child` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Development

- Run `git submodule init` to init git submodule
- Run `git submodule update` to get the files in submodules
- Run `pnpm install` to install all packages in apps
- Run `pnpm dev` 

## How to Build?

To build all apps and packages, navigate to the root directory, and run the following command:

```
pnpm build
```
