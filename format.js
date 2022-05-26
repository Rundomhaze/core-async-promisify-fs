const fs = require('fs');
const { readDir, stat, rename} = require('./index');
const wayDir = './notes/'


function rundomString() {
  return Math.random().toString(36).substring(8);
}

readDir(wayDir)
  .then(arr => {
    for (let i = 0; i < arr.length; i++) {
      stat(`${wayDir}${arr[i]}`)
        .then(stat => {
          rename(`${wayDir}${arr[i]}`, `${wayDir}file-${rundomString()}-${stat.size}-${stat.birthtime}`)
    })
  }
})
.catch(err => console.log(err))



///  Примеры вызова функций из экспорта для отработки с возвратом данных а не промисов


// readDir(wayDir)
// .then(result => console.log(result))

// // или :

// async function random() {
//   let result = await readDir(wayDir)
//   console.log(result);
// }

// random()
