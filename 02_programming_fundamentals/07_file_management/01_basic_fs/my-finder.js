const path = require("path");
const fs = require("fs");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentDirectory="";

function askQuestion(files) {
  reader.question("Choose a number> ", value => {
    if (isNaN(parseInt(value,10))) {
      console.log("Your number is not a number");
      askQuestion(files);
    }
    else {
      currentDirectory=`${files[value]}`;
      console.log(currentDirectory);
      for (let i=0; i<files.length; i++) {
        files[i]=`./${files[i]}`;
      }

      fs.access(`./${files[value]}`, (error) => {
        if (error) {
          return console.warn(error);
        }
        else
        {
          fs.readFile(`${files[value]}`, (error, data) => {
            if (error) {
              finder(`${files[value]}`);
            }
            else {
              console.log("your file\n" + data);
              console.log("I'm a file ! Youhou");
              reader.close();
            }
          });
        }
      });
    }
  });
}


function finder(directory) {
  fs.readdir(directory, (error,files) => {
    if (error) {
      return console.warn(error);
    }
    else {
      files.push("..");
      for (let i=0; i<files.length; i++) {
        console.log(`${i}. ${files[i]}`);
      }
      for (let i=0; i<files.length; i++) {
        files[i]=`${currentDirectory}/${files[i]}`;
      }

      askQuestion(files);
    }
  });
}

finder(".");
