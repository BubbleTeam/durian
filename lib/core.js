const parse = (jsonString) => {
    if (!jsonString.includes('//')) {
        return jsonString
    }
    let regx = /\/\/.*?(\n|\r)/g
    return jsonString.replace(regx, '');
}

const minify = (jsonString) => {
    return parse(jsonString).replace(/\s*(\n|\r)\s*/g, '');
}

export { parse, minify }