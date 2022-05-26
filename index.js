const fs = require('fs');
const wayDir = './notes'


function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
        console.log('***ОШИБКА***')
      }
    })
  });
}

readFile('./notes/note-1.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err))


function readDir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, arrFiles) => {
      if (!err) {
        resolve(arrFiles)
      } else {
        reject(err)
        console.log('***ОШИБКА***');
      }
    })
  })
}

readDir(wayDir)
.then(result => console.log(result))
.catch(error => console.log(error));


function stat(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (!err) {
        resolve(stats)
      } else {
        reject(err)
        console.log('***ОШИБКА***')
      }
    })
  })
};

stat('./notes/note-1.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err));


module.exports = {
  stat,
  readDir
}


