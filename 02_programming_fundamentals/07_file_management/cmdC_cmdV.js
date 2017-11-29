const fs = require('fs');

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
    });
  });

}

copyPaste("source_TSM.txt", "target_TSM.txt");
