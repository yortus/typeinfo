var path = require('path');
var fs = require('fs');
var peg = require('pegjs');
// Create a global variable that the code inside the PEG grammar can access.
global.pegopts = 'options';
// Create a parser for typescript model definitions (using pegjs).
var grammar = fs.readFileSync(path.join(__dirname, './ts.peg'), 'utf8');
var parser = peg.buildParser(grammar);
/** Generate a schema corresponding to the declarations in the given typescript file. */
function parse(source) {
    var ast = parser.parse(source);
    return ast;
}
exports.parse = parse;
