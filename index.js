const fs = require('fs');
let file = 'choto.txt';
let fileData = '';
// Release 0 
let readPromise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) reject(err);
        fileData = data;
        resolve();
    });
}).then(() => { console.log(fileData) });
// Release 1 
let writePromise = new Promise((resolve, reject) => {
    fs.writeFile('blabla.txt', 'blablablabla', 'utf8', (err) => {
        if (err) reject(err);
        resolve()
    })

})

let appendPromise = new Promise((resolve, reject) => {
    fs.appendFile('blabla.txt', '\nprivet', 'utf8', (err) => {
        if (err) reject(err);
        resolve();
    })
})

// writePromise;
// appendPromise;