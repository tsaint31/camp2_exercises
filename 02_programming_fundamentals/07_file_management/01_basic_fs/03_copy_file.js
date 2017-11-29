// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.


const fs = require('fs');

function copyPaste(source,target) {
  fs.access(source, (error) => {
    if (error) {
      return false;
    }
    else {
      fs.readFile(source, (error, data) => {
        if (error) {
          console.warn(error);
        }
        fs.writeFile(target,data, (error) => {
          if(error) {
            return console.warn(error);
          }
          console.log("The file was saved!");
          return true;
        });
      });
    }
  });
}

copyPaste("source_TSM.txt","target_TSM.txt");

module.exports = copyPaste;
