// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

const fs = require('fs');

function isAFile(path) {
  const stats=  fs.lstatSync(path);
  return stats.isFile();
}

function deleteFile(file) {
  if (isAFile) {
    {fs.unlink(file, (error) => {
      if(error) {
        return false;
      }
      else {console.log("File deleted!");
        return true;
      }
    });
    }
  }
}

deleteFile("source3_TSM.txt");

module.exports = deleteFile;
