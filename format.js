const {
  rename,
  get_stat,
  read_dir
} = require('./index.js')

function rundomString() {
  return Math.random().toString(36).substring(8)
};


read_dir('./notes')
  .then(arrNamesFiles => {
    for (let i = 0; i < arrNamesFiles.length; i++) {
      get_stat(`./notes/${arrNamesFiles[i]}`)
        .then(stats => {
          rename(`./notes/${arrNamesFiles[i]}`, `./notes/note-${rundomString()}-${stats.size}-${stats.birthtime}`)
        });
    };
  });
