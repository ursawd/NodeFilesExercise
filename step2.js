"use strict";
const axios = require(axios);
const fs = require("fs");
let path = process.argv[2];
cat(path);
// #######################################################
function cat(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}
// #######################################################
function webCat(url) {
    axios.get(url).then(function (result) {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}
