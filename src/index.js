var ts = require('./tslang/parse/index');
var ast = ts.parse("declare module 'foo' { export var x: number; }");
console.log(JSON.stringify(ast, null, 4));
