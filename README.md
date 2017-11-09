# durian
Make your json support comment
> only support single line comment '//'

#### Usage

##### parse
```javascript
const fs = require('fs');
const durian = require('durian');

const input = fs.readFileSync(path.join(__dirname, './input.json'), 'utf8');
const result = durian.parse(input);   // same as JSON.parse, just remove comments before parse;
```
input.json
```javascript
// head comment
{
    "code": 200,
    "message": "success",
    "result": {
        "list": [
            {
                "goodsId": 1,
                "goodsName": "Nike Kobe 8",
                "url": "https://www.kaola.com"
            },
            // {
            //     "goodsId": 2,
            //     "goodsName": "Nike Kobe 9",
            //     "url": "https://www.kaola.com"
            // },
            {
                "goodsId": 3,
                "goodsName": "Nike Kobe 10",
                "url": "https://www.kaola.com"
            }
        ],
        "total": 100
    }
}
// tail comment
```
And the result is(a javascript variable, not string):
```javascript
{
    "code": 200,
    "message": "success",
    "result": {
        "list": [
            {
                "goodsId": 1,
                "goodsName": "Nike Kobe 8",
                "url": "https://www.kaola.com"
            },
            {
                "goodsId": 3,
                "goodsName": "Nike Kobe 10",
                "url": "https://www.kaola.com"
            }
        ],
        "total": 100
    }
}
```

##### minify
```javascript
const fs = require('fs');
const durian = require('durian');

const input = fs.readFileSync(path.join(__dirname, './input.json'), 'utf8');
const result = durian.minify(input);
```
And the result is(a string, remove the whitespaces within input):
```javascript
{"code": 200,"message": "success","result": {"list": [{"goodsId": 1,"goodsName": "Nike Kobe 8","url": "https://www.kaola.com"},{"goodsId": 3,"goodsName": "Nike Kobe 10","url": "https://www.kaola.com"}],"total": 100}}
```


#### Build
```bash
$ npm run build
```

#### Publish
```
$ npm run publish
```