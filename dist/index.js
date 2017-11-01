'use strict';

var core = {
    parse: function parse(jsonString) {
        if (!jsonString.includes('//')) {
            return jsonString
        }
        var regx = /\/\/.*?(\n|\r)/g;
        return jsonString.replace(regx, '');
    },
    minify: function minify(jsonString) {
        return this.parse(jsonString).replace(/\s*(\n|\r)\s*/g, '');
    }
};

var fs = require('fs');
var index = {
    parse: function parse(jsonString) {
        return JSON.parse(core.parse(jsonString));
    },
    minify: function minify(jsonString) {
        return core.minify(jsonString);
    }
};

module.exports = index;
