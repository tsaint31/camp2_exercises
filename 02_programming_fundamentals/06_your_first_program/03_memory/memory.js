// This function will clear the terminal when called
const clear = require("cli-clear");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let mask_cards = ["1","2","3","4","5","6"];
let number_cards=0;
let couple=[];
let win=[];
let resultat=[];

function shuffle(table)
{
  let j = 0;
  let valI = "";
  let valJ = valI;
  let l = table.length - 1;
  while(l > -1)
  {
    j = Math.floor(Math.random() * l);
    valI = table[l];
    valJ = table[j];
    table[l] = valJ;
    table[j] = valI;
    l = l - 1;
  }
  return table;
}

function already_find(valeur) {
  for (let k=0;k<win.length;k++) {
    if (valeur===win[k]) {
      return true;
    }
  }
  return false;

}

function askQuestion() {
  reader.question("Please select one card? ", value => {
    couple.push(value);
    for (let i=0;i<cards.length;i++) {
      if (i===couple[0]-1 || i===couple[1]-1 ) {
        resultat.push(cards[i]);}
      else if (already_find(i)) {
        resultat.push(cards[i]);
      }
      else {resultat.push(mask_cards[i]);}
    }
    if (cards[couple[0]-1]===cards[couple[1]-1]) {
      win.push(couple[0]-1);
      win.push(couple[1]-1);
      console.log(win);
    }
    clear();
    console.log(resultat);
    resultat=[];
    number_cards=number_cards+1;
    if (number_cards!==2) {
      askQuestion();}
    else {
      if (win.length===cards.length) {
        console.log("YOUUUUUU WIN");
        reader.close();
      }
      else {
        number_cards=0;
        couple=[];
        askQuestion();}
    }});
}


function card_table(table) {
  shuffle(cards);
  console.log(mask_cards);
  askQuestion();
}

card_table(cards);
