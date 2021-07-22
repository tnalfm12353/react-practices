## ex04: React(API 기반) 어플리케이션으로 리펙토링  

1. 프로젝트 생성
```
 bash
    $ mkdir ex05
    $ cd ex05
    $ npm init 
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i react react-dom
```

2. 프로젝트 디렉토리
<pre>
    /ex05
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |       |--- index.html
      |       |--- bundle.js  [빌드 결과물]
      |
      |--- src
      |     |--- index.js
      |     |--- App.js
      |
      |--- webpack.config.js
</pre>

3. scripts  
```
 package.json

{
  "name": "ex05",
  "version": "1.0.0",
  "description": "",
  "main": "dev-server.js",
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  .
  .
  .

}

```

4. webpack 설정
```
 webpack.config.js

  const path = require('path');

  module.exports = {
      entry: path.resolve('src/index.js'),
      output: {
          path: path.resolve("public"),
          filename: "bundle.js"
      },
      devServer: {
          contentBase: path.resolve("public"),
          host: "0.0.0.0",
          port: 9999,
          inline: true,
          liveReload: true,
          hot: false,
          compress: true,
          historyApiFallback: true,
      }

  }
  
```


5. 빌드(번들링)
```
 bash
    $ npm run build

      or

    $ npx webpack

```

6. test (개발 서버 실행)
```
 bash
    $ npm start

      or
      
    $ npx webpack serve --progress
```