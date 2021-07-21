## ex02: 어플리케이션 분리 1

1. 프로젝트 생성
```
 bash
    $ mkdir ex02
    $ cd ex02
    $ npm init 
    $ npm i -D express
```

2. 프로젝트 디렉토리

<pre>
    /ex02
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |       |--- index.html
      |       |--- index.js
      |       |--- App.js
      |
      |--- dev-server
</pre>

3. scripts  
```
 packagejson

{
  "name": "ex02",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "dev-server.js",
  "scripts": {
    "start": "node dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


```

4. 어플리케이션 작성  
[index.js]
```
 javascript

  document.getElementById('root').appendChild(App());

```

[App.js]
```
 javascript

  const App = function() {
    const app = document.createElement('h1');
    app.textContent = "Hello World";

    return app;
  }

```

5. 테스트(테스트 서버 실용)
```
 bash
    $ npm start

```

6. 결론  

- 복잡한 어플리케이션은 코드를 분리하여 개발하는 것이 원칙  
- 어플리케이션 코드를 여러 js 파일로 옮기는 단순한 방식으로 분리  
  + 전통적인 분리 방식  
  + 브라우저가 js파일 로딩 순서를 보장하지 않는다.
  + 복잡하고 분리 파일이 많아지면 의존성 관리 자체가 불가능