export default {
    parse(jsonString) {
        if (!jsonString.includes('//')) {
            return jsonString
        }
        let regx = /\/\/.*?(\n|\r)/g
        return jsonString.replace(regx, '');
    },
    minify(jsonString) {
        return this.parse(jsonString).replace(/\s*(\n|\r)\s*/g, '');
    }
}