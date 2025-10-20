# Introduction

## Project Origin

Over the past two years, many representative infrastructure tools built with Rust have emerged, such as `rspack`, `rsbuild`, `rolldown`, etc. As a `rspack` user since the `0.x` versions, I've been closely following developments in this space. With the maturation of `rsbuild@1.0` - a next-generation, out-of-the-box tool built on top of `rspack` that positions itself as an alternative to `vite` - I naturally compared it with similar build tools like `electron-vite`. This led me to explore whether it would be possible to develop an `Electron` build tool based on rsbuild.

Vite's main drawback has been its slow hot reload performance in early versions. Although the author has made significant improvements recently, the fundamental issue remains that the development and production environments generate different outputs.

rsbuild provides a more elegant environments configuration that enables generating build artifacts for multiple environments, offering greater convenience during development while maintaining consistent output between development and production environments.

## What Problems Does Electron-Rsbuild Solve?

- Consistent artifact output across multiple environments based on `rsbuild`.
- Provides a set of `Electron` environment engineering configurations within the `rsbuild` ecosystem.
