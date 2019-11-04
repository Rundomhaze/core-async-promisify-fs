const fs = require('fs');
let file = 'choto.txt';
let fileData = '';
// Release 0 
// let readPromise = new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) reject(err);
//         fileData = data;
//         resolve();
//     });
// }).then(() => { console.log(fileData) });
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

// Release 2
let openPromise = new Promise((resolve, reject) => {
    fs.open(file, (err, fd) => {
        if (err) reject(err);
        //console.log(fd);
        resolve(fd);
    })
}).then((fd) => {
    fs.close(fd, (err) => {
        if (err) reject(err);
    });
}).catch((err) => {
    throw err;
})

let readdirPromise = new Promise((resolve, reject) => {
    fs.readdir('./', (err, files) => {
        if (err) reject(err);
        resolve(files);
    })
}).then((files) => {
    return new Promise((resolve, reject) => {
        let dirSize = 0;
        files.forEach((element, idx) => {
            fs.stat('./' + element, (err, stats) => {
                //console.log(dirSize);
                if (err) reject(err);
                dirSize += stats.size;
                if (idx === files.length - 1) {
                    resolve(dirSize);
                }
            })
        });
    })
}).then((data) => {
    console.log(data);
}).catch((err) => { throw err })

// writePromise;
// appendPromise;
//openPromise;
readdirPromise;