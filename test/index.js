const fs = require('fs');
const path = require('path');
const durian = require('../dist');

const input = fs.readFileSync(path.join(__dirname, './input.json'), 'utf8');
const res_parse = fs.readFileSync(path.join(__dirname, './res_parse.json'), 'utf8');
const res_minify = fs.readFileSync(path.join(__dirname, './res_minify.json'), 'utf8');

console.log(JSON.stringify(durian.parse(input)) === JSON.stringify(JSON.parse(res_parse)));
console.log(durian.minify(input) === res_minify);