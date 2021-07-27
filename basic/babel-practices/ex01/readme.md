## Core Library

1. 변환 규칙을 소스에 적용해서 변환 파일을 생성한다.
2. 변환 규칙은 가지고 있지 않다.
3. 바벨 플러그인이 변환 규칙을 가지고 있다.

## install Core Library
```
 bash

    $npm i -D @babel/core
```

## usage Core Library
```
 javascript
 
    const babel = require("@babel/core");
    const result = babel.transform("() => 1;", {});

    console.log(result);
```