# Election-rsbuild docs

Documentation for Electron Rsbuild

> Bun [not support rsbuild](https://github.com/oven-sh/bun/issues/11628)，don't use it.

## Features

- based on [rsbuild](https://github.com/web-infra-dev/rsbuild)
- Plug-in implementation
- Hot module replacement

## Quick Start

Create the `Electron-rsbuild` project:

pnpm:

```shell
pnpm create electron-rsbuild@0.0.12
```

## Playground snapshot

Use `npm create electron-rsbuild@0.0.12` create a `electron-rsbuild` project:

![playground-install-npm](/docs//public//playground/playground-install-npm.png)

Use `pnpm run dev` launch electron:
![playground-demo](/docs//public//playground/playground-demo.png)

## Configuring .npmrc

For Chinese users, consider adding `.npmrc` to the root directory to speed up installation:

```yml
electron_mirror=https://npmmirror.com/mirrors/electron/
electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
```

## Reference

- [rsbuild](https://github.com/web-infra-dev/rsbuild)
- [rspack](https://github.com/web-infra-dev/rspack)
- [vite](https://github.com/vitejs/vite)
- [electron-vite](https://github.com/alex8088/electron-vite)
- [electron](https://github.com/electron/electron)
