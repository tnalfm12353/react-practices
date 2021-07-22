## webpack-practice: ex02
1. 프로젝트 생성
```
 bash

    $ mkdir ex02
    $ cd ex01
    $ npm init
    $ npm i -D webpack webpack-cli express

```

2. 프로젝트 디렉토리

<pre>
    /ex01
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |       |--- index.html
      |       |--- bundle.js
      |
      |--- src
      |     |--- index.js
      |     |--- App.js
      |
      |--- webpack.config.js [webpack 설정 파일]
      |--- dev-server.mjs
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
        }
    }
    
```

4. 빌드하기
```
 bash
    $ npx webpack  // webpack.config.js의 output 섹션에 지정한 ./public/bundle.js로 번들링 됨.

```

5. test server 실행
```
 bash
    $ node dev-server.mjs

```