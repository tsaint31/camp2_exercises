const fs = require('fs');

function delete_file(file) {
  fs.unlink(file, (error) => {
    if(error) {
      return console.warn(error);
    }
    console.log("File deleted!");
  });
}

delete_file("source_TSM.txt");
