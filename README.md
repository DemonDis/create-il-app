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
  name: 'host',
  port: '9001',
  framework: 'react'
})
```

## 💃 Motivation

A quick recap about the concept of `Micro Frontends`:

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** using **different JavaScript frameworks**. — [Micro Frontends](https://micro-frontends.org/)

## 📦 Structura
```
└── create-il-app/
    ├── React 18 /     # 
    |    ├── Webpack   #
    |    └── Vite      # 
    └── ...
```

[size]: https://packagephobia.now.sh/badge?p=create-il-app
[size-url]: https://packagephobia.now.sh/result?p=create-il-app