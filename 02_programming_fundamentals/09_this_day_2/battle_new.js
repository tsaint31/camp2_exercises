const readline = require('readline');
const fs = require("fs");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// const WINNING_BOAT = [
//   {letter: "A", digit: 0},
//   {letter: "A", digit: 1},
//   {letter: "B", digit: 3},
//   {letter: "B", digit: 4},
//   {letter: "B", digit: 5}
// ];
const WINNING_BOAT=[];


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

function randomBoat() {
  fs.readFile("./boat.json", (error, data) => {
    if (error) {
    console.warn(error);
    return;
    }
    const parsedData = JSON.parse(data);
    const numero = Math.floor(Math.random()*3);
    for (let i=0;i<parsedData[numero].length;i++) {
      WINNING_BOAT.push(parsedData[numero][i]);
    }
    const numero2 = Math.floor(Math.random()*3)+3;
    for (let i=0;i<parsedData[numero2].length;i++) {
      WINNING_BOAT.push(parsedData[numero2][i]);
    }
  });
}

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


// changer l'input en coordinate
function getCoordinate(input) {
  const letter = input[0];
  const digit = (input.substring(1,3)) - 1;
  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

// MAJ de la case
function updateState(coordinate) {
  function isInList(element) {
    if (element.letter===coordinate.letter && element.digit===coordinate.digit) {
      return true
    }
  }
  if (WINNING_BOAT.some(isInList)) {
    state[coordinate.letter][coordinate.digit]=" O ";
    nb_touch=nb_touch+1;
    console.log("TOUCHED")
  }
  else {
    state[coordinate.letter][coordinate.digit]="   ";
    console.log("MISSED");}
}


// check if the has winner on parcourt les coordonnées gagnantes et on vérifie si on a XXX ou AAA si on retourne true c'est bon
function hasWinner() {
  if (nb_touch===WINNING_BOAT.length) {
    return true;
  };
}

// Gestion du retour de la fonction
function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      renderBoard();
      console.log(`Congratulations you won! ＼(＾O＾)／`);
      reader.close();
    }
    else {
      launchBomb();
    }
  } else {
    console.log("This is not a valid move");
    launchBomb();
  }
}

function launchBomb() {
  renderBoard();
  reader.question("Where do you want to launch a Bomb? (use coordinates like B3):",  handleInput)
}


function playBattle() {
randomBoat();
launchBomb();
}

playBattle();
