# {{SAFE_NAME}}

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:{{PORT}}
$ yarn start

# build for production
$ yarn build
```

```js
({
  type: 'Application',
  name: '{{SAFE_NAME}}',
  port: '{{PORT}}',
  framework: '{{FRAMEWORK}}',
  language: '{{LANGUAGE}}',
})
```

## 🚀 FSD
```
└── src/
    ├── app/                    # Инициализирующая логика приложения
    |    ├── index.jsx          # Энтрипоинт для подключения приложения
    |    └── index.css          # Глобальные стили приложения
    ├── pages/                  #
    ├── widgets/                #
    ├── features/               #
    ├── entities/               #
    ├── shared/                 #
    ├── index.jsx               # Подключение и рендеринг приложения
    └── ...
```