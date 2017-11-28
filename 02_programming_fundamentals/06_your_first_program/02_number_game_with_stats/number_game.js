const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const number_to_find=Math.ceil(Math.random(100)*100);
console.log(number_to_find);
let numberTry=1;


function askQuestion() {
reader.question("What is your number? ", value => {
  if (isNaN(parseInt(value))) {
    console.log(`Your number is not a number`);
    numberTry=numberTry+1;
    askQuestion();
   }
   else if (parseInt(value)<1 || parseInt(value)>100) {
     console.log("The number is between 1 and 100");
     numberTry=numberTry+1;
     askQuestion();
   }
  else if (parseInt(value)===number_to_find) {
    if (numberTry===1) {
    console.log("You won in one shot!");
    reader.close();}
    else {console.log(`You won in ${numberTry} tries`);
    reader.close();}
  }

  else if (parseInt(value)>number_to_find) {
    console.log("Too high");
    numberTry=numberTry+1;
    askQuestion();
  }
  else {
    console.log("Too Low");
    numberTry=numberTry+1;
    askQuestion();
  }
});
}

askQuestion();
