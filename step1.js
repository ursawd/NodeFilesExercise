"use strict";

const fs = require("fs");
let path = process.argv[2];
cat(path);
function cat(path) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    });
}
