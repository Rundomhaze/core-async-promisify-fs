const fs = require('fs');


function read_file(path, codeRead) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, codeRead, (err, content) => {
      if (err) {
        reject(err)
      } else {
        resolve(content)
      };
    });
  });
};

// read_file('./notes/note-1.txt', 'utf-8')
//   .then(data => console.log(data));

function read_dir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, arrFilesName) => {
      if (err) {
        reject(err)
      } else {
        resolve(arrFilesName)
      };
    });
  });
};

// read_dir('./notes')
//   .then(data => console.log(data));

function get_stat(pathAndName) {
  return new Promise((resolve, reject) => {
    fs.stat(pathAndName, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      };
    });
  });
};

// get_stat('./notes/note-2.txt')
//   .then(data => console.log(data));


///// Вариант на async - await :


// async function x() {
//   const y = await get_stat('./notes/note-1.txt');
//   console.log(y);
// };
// x();


function rename(oldPathAndName, newPathAndName) {
  return new Promise((resolve, reject) => {
    fs.rename(oldPathAndName, newPathAndName, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve('File renamed')
      };
    });
  });
};

// rename('./notes/note-1.txt', './notes/XXxxxxxxX.txt')
//   .then(data => console.log(data));



module.exports = {rename, get_stat, read_dir}
