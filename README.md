# create-il-app

[![npm version](https://badge.fury.io/js/create-il-app.svg)](https://badge.fury.io/js/create-il-app) [![npm version](https://img.shields.io/npm/dm/create-il-app.svg)](https://badge.fury.io/js/create-il-app)
[![size][size]][size-url]

<div align="center"><img src="https://github.com/DemonDis/create-il-app/blob/main/images/InnoLab.png" height="150" alt="Innovation lab"></div>

## Usage

```
npx create-il-app
```

## Micro-Frontends
```js
({
  type: 'Application',
  typeweb: 'SPA',
  toolsbuild: 'Webpack5',
  name: 'host',
  port: '9001',
  framework: 'react',
  language: 'javascript',
  css: 'css',
})
```

## 💃 Motivation

A quick recap about the concept of `Micro Frontends`:

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** using **different JavaScript frameworks**. — [Micro Frontends](https://micro-frontends.org/)

## 📦 Structura

1. Module Federation Webpack 5 (MFW)
    1. SPA
        1. React 18 (js/ts)
        2. VUE 3 (js/ts)
        3. Angular (ts)
        4. Svelte (js/ts)
    2. SSR
        1. Next 13 (js)
2. Vite
    1. SPA
        1. React 18 (ts)
        2. VUE 3 (js)
    1. SSR
        1. Nuxt 3 (js)
3. Single-Spa + MFW
    1. React 18 (js)
4. StoryBook (storybook-module-federation)
    1. React 18 (js/ts)
    2. Vue 3 (js)
5. Packages (wsrun)
6. Futter build (Webpack) - experimental

### Styles

1. SCSS architecture
2. Tailwind
3. Bootstrap

### Сomponent example

- Example VUE btn => REACT
- Example REACT btn => VUE
- Single-Spa + Module Federation (host/remote)

### ✨ Features

- ⚡ **Remix js (react) js**

[size]: https://packagephobia.now.sh/badge?p=create-il-app
[size-url]: https://packagephobia.now.sh/result?p=create-il-app
