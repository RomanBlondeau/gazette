# Gazette client technical documentation

## Table of contents

1. [Install](#Install)
   1. [Prerequisites](#prerequisites)
   2. [Configuration](#configuration)
   3. [Deployment](#deployment)
2. [Stack](#stack)
3. [Authors](#Authors)

## Install

#### Prerequisites

[yarn](https://yarnpkg.com/lang/en/)

#### Configuration

`/client/app/config/api.js`

- baseUrl = url of back-end server (can be found in `/server/src/config/default.json`)

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

## Stack

![electron-logo](../../Misc/electron.png 'Electron Logo') [ElectronJS](https://electronjs.org/)

![react-logo](../../Misc/react.png 'React Logo') [ReactJS](https://reactjs.org/)

![redux-logo](../../Misc/redux.png 'Redux Logo') [Redux](https://redux.js.org/)

## Authors

- [**Roman Blondeau**](https://github.com/RomanBlondeau)
- [**Nicolas Menettrier**](https://github.com/Nicolas-Menettrier)
