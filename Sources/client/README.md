# Gazette technical documentation

## Table of contents

1. [Install](#Install)
   1. [Prerequisites](#prerequisites)
   2. [Configuration](#configuration)
   3. [Deployment](#deployment)
2. [Technical aspects](#technical-aspects)
   1. [Stack](#stack)
   2. [API](#API)
   3. [Structure](#Structure)
   4. [Resources](#Resources)
3. [Authors](#Authors)

## Install

#### Prerequisites

[yarn](https://yarnpkg.com/lang/en/)

#### Configuration

#### Deployment

##### Dev build

First, install dependencies with yarn.

```bash
$ cd gazette
$ yarn
```

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ yarn start-renderer-dev
$ yarn start-main-dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

##### Production build

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package -- --[option]
```

To run End-to-End Test

```bash
$ yarn build-e2e
$ yarn test-e2e

# Running e2e tests in a minimized window
$ START_MINIMIZED=true yarn build-e2e
$ yarn test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## Technical aspects

#### Stack

#### API

#### Structure

#### Resources

## Authors

- **Roman Blondeau** (roman.blondeau@epitech.eu)
- **Nicolas Menettier** (nicolas1.menettier@epitech.eu)
