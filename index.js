const fs = require('fs');
import minify from './lib/minify';

export default {
    parse(jsonString) {
        return JSON.parse(minify(jsonString));
    },
    minify(jsonString) {
        return minify(jsonString);
    }
}