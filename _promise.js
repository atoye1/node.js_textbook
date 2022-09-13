const axios = require('axios');
let reqResult = await axios.get('http://google.com');
console.log(reqResult);
const condition = true;
const promise = new Promise((res, rej) => {
    if (condition) {
        res('succeed');
    } else {
        rej('failed');
    }
});
