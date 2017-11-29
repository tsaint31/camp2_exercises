// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require('fs');

function delete_file(file) {
  fs.unlink(file, (error) => {
    if(error) {
      return console.warn(error);
    }
    console.log("File deleted!");
    return true;
  });
}

function cutPaste(source,target) {

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
      return true;
    });
  });
}

cutPaste("source_TSM.txt", "target_TSM.txt");

module.exports = cutPaste;
