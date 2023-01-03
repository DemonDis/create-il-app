# create-il-app

[![npm version](https://badge.fury.io/js/create-il-app.svg)](https://badge.fury.io/js/create-il-app) [![npm version](https://img.shields.io/npm/dm/create-il-app.svg)](https://badge.fury.io/js/create-il-app)
[![size][size]][size-url]

## Usage

```
npx create-il-app
```

## Micro-Frontends
```js
({
  type: 'Application',
  typeweb: 'SPA',
  name: 'host',
  port: '9001',
  framework: 'react',
  language: 'javascript',
  css: 'css',
})
```
1. Module Federation Webpack 5 (MFW)
    1. SPA
        1. React 18 (js)
        2. VUE 3 (js)
        3. Angular (ts)
    2. SRR
        1. Next 13 (js)
2. Vite
    1. SRR
        1. Nuxt 3 (js)
3. Single-Spa + MFW
    1. React 18 (js)
4. StoryBook (storybook-module-federation)
    1. React 18 (js)
5. Packages (wsrun)

### Styles

1. SCSS architecture
2. Tailwind

### Under development

1. Single-Spa
2. Ui component (bootsrap... etc)
3. Storybook storybook-webpack-federation-plugin"
4. Single-Spa typescript + framework (vue3... etc)
5. SSR example
6. Test
7. Angular
8. Vite tools build

### Сomponent example

- Example VUE btn => REACT
- Example REACT btn => VUE
- Single-Spa + Module Federation (host/remote)

### 🐛

1. typescript version


[size]: https://packagephobia.now.sh/badge?p=create-il-app
[size-url]: https://packagephobia.now.sh/result?p=create-il-app