'use strict';

var minify = {
    
};

var fs = require('fs');
var index = {
    parse: function parse(jsonString) {
        return JSON.parse(minify(jsonString));
    },
    minify: function minify$1(jsonString) {
        return minify(jsonString);
    }
};

module.exports = index;
