const readline = require("readline");
const fs = require("fs");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let played=0;
let best=0;
let parsedData={};

const number_to_find=Math.ceil(Math.random(100)*100);
let numberTry=1;

function askQuestion(stats) {
  reader.question("What is your number? ", value => {
    if (isNaN(parseInt(value,10))) {
      console.log("Your number is not a number");
      numberTry=numberTry+1;
      askQuestion(stats);
    }
    else if (parseInt(value,10)<1 || parseInt(value,10)>100) {
      console.log("The number is between 1 and 100");
      numberTry=numberTry+1;
      askQuestion(stats);
    }
    else if (parseInt(value,10)===number_to_find) {
      if (numberTry===1) {
        console.log("You won in one shot!");
        stats.game=parseInt(stats.game,10)+1;
        if (numberTry<stats.best) {
          stats.best=numberTry;
        }
        console.log(`You played ${stats.game} games`);
        console.log(`Your best score is: ${stats.best}`);
        fs.writeFile("./stats.json", JSON.stringify(stats), (error) => {
          if(error) {
            console.warn(error);
            return;
          }
        });
        reader.close();}
      else {console.log(`You won in ${numberTry} tries`);
        stats.game=parseInt(stats.game,10)+1;
        if (numberTry<stats.best) {
          stats.best=numberTry;
        }
        console.log(`You played ${stats.game} games`);
        console.log(`Your best score is: ${stats.best}`);
        fs.writeFile("./stats.json", JSON.stringify(stats), (error) => {
          if(error) {
            console.warn(error);
            return;
          }
        });
        reader.close();}
    }

    else if (parseInt(value,10)>number_to_find) {
      console.log("Too high");
      numberTry=numberTry+1;
      askQuestion(stats);
    }
    else {
      console.log("Too Low");
      numberTry=numberTry+1;
      askQuestion(stats);
    }
  });
}

function welcome() {
  fs.readFile("./stats.json", (error, data) => {
    if (error) {
      console.warn(error);
      return;
    }
    else {
      parsedData = JSON.parse(data);
      played = parsedData.game;
      best = parsedData.best;
      console.log("Welcome to the number game");
      console.log(`You played ${played} games`);
      console.log(`Your best score is: ${best}`);
      askQuestion(parsedData);
    }
  });
}

welcome();
