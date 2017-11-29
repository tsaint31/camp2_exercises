const fs = require('fs');


function touch(file) {
  fs.open(file, 'w', (error, file) => {
    if (error) {
      return console.warn(error);
    }
    console.log('Saved!');
  });
}

touch("source_TSM.txt")
