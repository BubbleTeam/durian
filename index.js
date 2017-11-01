const fs = require('fs');
import core from './lib/core';

export default {
    parse(jsonString) {
        return JSON.parse(core.parse(jsonString));
    },
    minify(jsonString) {
        return core.minify(jsonString);
    }
}