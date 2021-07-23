## ex07: CRA로 만든 Application 직접 설정해서 만들어 보기

1. 프로젝트 생성
```
 bash
    $ mkdir ex06
    $ cd ex06
    $ npm init 
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react
    $ npm i react react-dom

```

2. 프로젝트 디렉토리
<pre>
    /ex07
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
      |--- babel.config.json
      |--- webpack.config.js
</pre>

3. scripts  
```
 package.json

{
  "name": "ex06",
  "version": "1.0.0",
  "description": "",
  "main": "dev-server.js",
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack",
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
      module: [{
          test: /\.js$/i,
          exclude: /node_modules/,
          loader: babel-loader
      }]
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

5. babel 설정
```
 babel.config.json

  {
    "presets": [["@babel/env",{
            "targets": {
                "ie": "11",
                "edge": "80",
                "firefox": "73",
                "chrome": "82",
                "opera": "69",
                "safari": "13"
            }
        }], "@babel/react"]
  }
  
```

6. 빌드(번들링)
```
 bash
    $ npm run build

      or

    $ npx webpack

```

7. test (개발 서버 실행)
```
 bash
    $ npm start

      or
      
    $ npx webpack serve --progress
```