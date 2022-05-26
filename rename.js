const fs = require('fs');


function rename(oldWay, newway) {
  return new Promise((resolve, reject) => {
    fs.rename(oldWay, newway, (err) => {
      resolve()
    })
  })
}

//rename('Напиши старый путь и имя',  'Напиши новый путь и имя')
rename('./renameNotes/NOTE-1.txt', './notes/note-1.txt')
