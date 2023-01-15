# {{SAFE_NAME}}

## Build Setup

1. Flutter project
```
flutter create . --platforms=web
```
    1. https://docs.flutter.dev/get-started/web
    2. https://docs.flutter.dev/development/platform-integration/web/renderers
```
 flutter run -d chrome --web-renderer html --profile
```

2. Start webpack build

```bash
# install dependencies
yarn

# serve with hot reload at localhost:{{PORT}}
$ yarn start
```

```js
({
  type: 'Flutter',
  toolsbuild: 'Webpack5',
  name: '{{SAFE_NAME}}',
  port: '{{PORT}}',
  framework: 'flutter',
  css: 'css',
})
```