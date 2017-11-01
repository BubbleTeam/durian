'use strict';

var parse = function (jsonString) {
    if (!jsonString.includes('//')) {
        return jsonString
    }
    var regx = /\/\/.*?(\n|\r)/g;
    return jsonString.replace(regx, '');
};

var minify = function (jsonString) {
    return parse(jsonString).replace(/\s*(\n|\r)\s*/g, '');
};

var index = {
    parse: function parse$1(jsonString) {
        return JSON.parse(parse(jsonString));
    },
    minify: function minify$1(jsonString) {
        return minify(jsonString);
    }
};

module.exports = index;
