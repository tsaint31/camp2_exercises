const fs = require('fs');


function creation(file) {
  fs.open(file, "w", (error, file) => {
    if (error) {
      return console.warn(error);
    }
  });
}

function touch(file) {
  fs.access(file, (error) => {
    if (error) {
      creation(file);
    }
    else {
      fs.open(file, "r", (error, fd) => {
        if (error) {
          return console.warn(error);
        }
        fs.futimes(fd,new Date(),new Date(),(error) => {
          if (error) {
            return console.warn(error);
          }
        });
      });
    }
  });
}



touch("source3_TSM.txt");
// touch("source_TSM.txt")
