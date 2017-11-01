import { parse, minify } from './lib/core';

export default {
    parse(jsonString) {
        return JSON.parse(parse(jsonString));
    },
    minify(jsonString) {
        return minify(jsonString);
    }
}