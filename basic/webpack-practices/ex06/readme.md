## webpack-practice: ex06

1. 프로젝트 생성
```
 bash

    $ mkdir ex06
    $ cd ex06
    $ npm init
    $ npm i -D webpack webpack-cli webpack-dev-server 
    $ npm i -D css-loader style-loader sass-loader 
    $ npm i -D node-sass

```

2. 프로젝트 디렉토리

<pre>
    /ex06
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |       |--- assets
      |       |      |--- images
      |       |             |--- logo.svg [build 결과]
      |       |
      |       |--- index.html
      |       |--- bundle.js              [build 결과]
      |
      |--- src
      |     |--- App.js
      |     |--- App.scss
      |     |--- index.css
      |     |--- index.js
      |     |--- logo.svg
      |
      |
      |--- webpack.config.js [webpack 설정 파일]
</pre>

3. 웹팩 설정
```
 webpack.config.js

    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve("public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.s[ac]ss/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.svg$/i,
                loader: 'file-loader',
                options: {
                    outputPath: '/assets/images',
                    name: '[name].[ext]'
                }
            }]
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

4. 빌드하기 (images 복사를 위해서 이전과는 다르게 먼저 꼭 해야함.)  
```
 bash
    $ npx webpack  // webpack.config.js의 output 섹션에 지정한 ./public/bundle.js로 번들링 됨.

```

5. test server 실행
```
 bash
    $ npx webpack serve --progress

```