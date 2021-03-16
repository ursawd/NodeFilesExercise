"use strict";
const axios = require("axios");
const fs = require("fs");
const process = require("process");

let fileOutFlag = "";
let fileToCreat = "";
let pathOrURL = "";

if (process.argv[2] === "--out") {
    fileOutFlag = process.argv[2];
    fileToCreat = process.argv[3];
    pathOrURL = process.argv[4];
} else {
    pathOrURL = process.argv[2];
}

if (pathOrURL.includes("http")) {
    webCat(pathOrURL);
} else if (pathOrURL.includes(".")) {
    cat(pathOrURL);
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
            fileOutFlag ? writeToFile(data) : console.log(data);
        }
    });
}
// #######################################################
function webCat(url) {
    axios
        .get(url)
        .then(function (result) {
            fileOutFlag ? writeToFile(result.data) : console.log(result.data);
        })
        .catch((e) => {
            console.log(e);
            process.exit(1);
        });
}
// #######################################################
function writeToFile(content) {
    fs.writeFile("./" + fileToCreat, content, "utf8", function (err) {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("File Written");
        }
    });
}
