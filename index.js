const fs = require('fs');
let file = 'choto.txt';
let fileData = '';
let promise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) reject(err);
        fileData = data;
        resolve();
    });
}).then(() => { console.log(fileData) });

promise