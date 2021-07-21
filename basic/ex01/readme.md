## ex01: 전통적인 DOM API 기반의 어플리케이션  

1. 프로젝트 생성
```
 bash
    $ mkdir ex01
    $ cd ex01
    $ npm init 
    $ npm i -D express
```

2. 프로젝트 디렉토리

<pre>
    /ex01
      |--- package.json
      |--- package-lock.json
      |--- node-modules
      |--- public
      |       |--- index.html
      |       |--- index.js
      |
      |--- dev-server
</pre>

3. scripts  
```
 packagejson

{
  "name": "ex01",
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
 
  const App = function() {
    const app = document.createElement('h1');
    app.textContent = "Hello World";

    return app;
  } 

  document.getElementById('root').appendChild(App());
```

5. 테스트(테스트 서버 실용)
```
 bash
    $ npm start

```

6. 결론  
  - DOM API를 직접 자바스크립트 코드로 호출
  - 주로 DOM 조작에 특화된 jQuery와 같은 라이브러리를 활용한다.
  - 장점은 작성된 어플리케이션 코드의 전달이 쉽다. (작성된대로 js파일을 html에 링크)