"use strict";
const axios = require("axios");
const fs = require("fs");
if (process.argv[2].includes("http")) {
    let url = process.argv[2];
    webCat(url);
} else if (process.argv[2].includes(".")) {
    let path = process.argv[2];
    cat(path);
} else {
    console.log("Invalid Input");
    process.exit(1);
}

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
    axios
        .get(url)
        .then(function (result) {
            console.log(result.data);
        })
        .catch(function (e) {
            console.log(e);
        });
}
