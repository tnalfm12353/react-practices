const babel = require("@babel/core");

const result = babel.transform("() => 1;", {});

console.log(result);