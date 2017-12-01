const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const letter=["A","B","C","D","E","F","G","H","I","J"];

const myBoat=["A1","A2","B3","B4","B5"];
let result="";
let nb_touch=0;

const state = {
A: Array(10).fill(null),
B: Array(10).fill(null),
C: Array(10).fill(null),
D: Array(10).fill(null),
E: Array(10).fill(null),
F: Array(10).fill(null),
G: Array(10).fill(null),
H: Array(10).fill(null),
I: Array(10).fill(null),
J: Array(10).fill(null),
};

// function randomBoat() {
//     const boatN1=Math.ceil(Math.random()*10);
//     const boatN2=Math.ceil(Math.random()*10);
//     const boatN3=Math.ceil(Math.random()*10);
//     const boatL1=letter[Math.ceil(Math.random()*3)];
//     const boatL2=letter[Math.ceil(Math.random()*3)+3];
//     const boatL3=letter[Math.ceil(Math.random()*3)+6];
//     const boat1=letter[Math.ceil(Math.random()*3)]+Math.ceil(Math.random()*10);
// }

function renderCell(cell) {
  if (cell === null) {
    return " ~ ";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join("");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "   1  2  3  4  5  6  7  8  9  10";
  console.log(`${header}\n${rows}`);
}

function launchBomb() {
  renderBoard();
  reader.question("Where do you want to launch a Bomb? (use coordinates like B3):", value => {
    for (let i=0; i<myBoat.length;  i++) {
    if (value===myBoat[i]) {
      result="TOUCHED";}
    }
    if (result==="TOUCHED") {
      nb_touch=nb_touch+1;
      state[value.substring(0,1)][(value.substring(1,3))-1]=" 0 "
      renderBoard();
      console.log(result);
      result="";
      if (nb_touch===myBoat.length) {
        console.log("YOUUUUU WIN");
        reader.close();
        return true;
      };
      launchBomb();
    }
    else {
      state[value.substring(0,1)][(value.substring(1,3))-1]=" X "
      launchBomb();
    }
    }
  );
}

function playBattle() {
launchBomb();
}

playBattle();
