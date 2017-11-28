const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const number_to_find=Math.ceil(Math.random(100)*100);

function askQuestion() {
  reader.question("What is your number? ", value => {
    if (isNaN(parseInt(value,10))) {
      console.log("Your number is not a number");
      askQuestion();
    }
    else if (parseInt(value,10)<1 || parseInt(value,10)>100) {
      console.log("The number is between 1 and 100");
      askQuestion();
    }
    else if (parseInt(value,10)===number_to_find) {
      console.log("You won!");
      reader.close();
    }
    else if (parseInt(value,10)>number_to_find) {
      console.log("Too high");
      askQuestion();
    }
    else {
      console.log("Too Low");
      askQuestion();
    }
  });
}

askQuestion();
