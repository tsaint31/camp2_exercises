const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const number_to_find=Math.ceil(Math.random(100)*100);
console.log(number_to_find);

function askQuestion() {
reader.question("What is your number? ", value => {
  console.log(value);
  console.log(number_to_find);
  if (isNaN(parseInt(value))) {
    console.log(`Your number is not a number`);
    askQuestion()
   }
   else if (parseInt(value)<1 || parseInt(value)>100) {
     console.log("The number is between 1 and 100");
     askQuestion();
   }
  else if (parseInt(value)===number_to_find) {
    console.log("You won!");
    reader.close();
  }
  else if (parseInt(value)>number_to_find) {
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
