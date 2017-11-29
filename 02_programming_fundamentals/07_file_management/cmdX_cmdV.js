const fs = require('fs');

function delete_file(file) {
fs.unlink(file, (error) => {
    if(error) {
      return console.warn(error);
    }
    console.log("File deleted!");
  });
}

function copyPaste (source,target) {

  fs.readFile(source, (error, data) => {
    if (error) {
      console.warn(error);
    }
    fs.writeFile(target,data, (error) => {
      if(error) {
          return console.warn(error);
      }
      console.log("The file was saved!");
      delete_file(source);
    });
  });
}

copyPaste("source_TSM.txt", "target_TSM.txt");
