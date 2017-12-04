
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

// function hasWinner()
// function gameIsFinished()

// Gestion du retour de la fonction
function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      console.log(renderBoard());
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished()) {
      console.log(renderBoard());
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

// changer l'input en coordinate
function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}
// MAJ de la case
function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}
// changement du player
function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// démarrage de chaque tour
function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

// démarrage du jeu et décision du currentplayer
function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}

//affichage de la cellule
function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

//affichage de la ligne
function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

// affichage du board
function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

// mise à plat d'un tableau de tabeau
function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), [])
}

// check if tous les cases sont remplis
function gameIsFinished() {
  const allValues = flattenArray(Object.values(state));
  return allValues.every(isNotNull)
}
// check if the has winner on parcourt les coordonnées gagnantes et on vérifie si on a XXX ou AAA si on retourne true c'est bon
function hasWinner() {
  const isWinningLine = (line) => {
    const pattern =
      line
      .map((coordinate) => state[coordinate.letter][coordinate.digit])
      .join("");
    return pattern === "XXX" || pattern === "OOO";
  }

  return WINNING_COORDINATES.some(isWinningLine);
}

function isNotNull(value) {
  return value !== null;
}

start();
// function checkWin() {
//     if
//      (
//        (((state["a"][0]===state["a"][1]) && (state["a"][0]===state["a"][2])) && (state["a"][0]!==null)) ||
//        (((state["b"][0]===state["b"][1]) && (state["b"][0]===state["b"][2])) && (state["b"][0]!==null)) ||
//        (((state["c"][0]===state["c"][1]) && (state["c"][0]===state["c"][2])) && (state["c"][0]!==null)) ||
//        (((state["a"][0]===state["b"][0]) && (state["a"][0]===state["c"][0])) && (state["a"][0]!==null)) ||
//        (((state["a"][1]===state["b"][1]) && (state["a"][1]===state["c"][1])) && (state["a"][1]!==null)) ||
//        (((state["a"][2]===state["b"][2]) && (state["a"][2]===state["c"][2])) && (state["a"][2]!==null)) ||
//        (((state["a"][0]===state["b"][1]) && (state["a"][0]===state["c"][2])) && (state["a"][0]!==null)) ||
//        (((state["a"][2]===state["b"][1]) && (state["a"][2]===state["c"][0])) && (state["a"][2]!==null))
//       )
//     {
//       console.log(`player : ${currentPlayer} you win you win you win you win you win you win`);
//       endGame=true;
//       reader.close();
//     }
// }


// const ligne1=["X","O","_"];
// const ligne2=["_","X","O"];
// const ligne3=[" "," ","X"];
//
// function renderBoard() {
// console.log(`    1     2     3`);
// console.log(`a __${ligne1[0]}__|__${ligne1[1]}__|__${ligne1[2]}__`);
// console.log(`b __${ligne2[0]}__|__${ligne2[1]}__|__${ligne2[2]}__`);
// console.log(`c   ${ligne3[0]}  |  ${ligne3[1]}  |  ${ligne3[2]}  `);
// }

// renderBoard();
// console.log("PLAYER X YOU WIN")

//
//
// const readline = require("readline");
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const state = {
//   a: Array(3).fill(null),
//   b: Array(3).fill(null),
//   c: Array(3).fill(null)
// };
//
// let currentPlayer;
//
// function checkWin() {
//     if
//      (
//        (((state["a"][0]===state["a"][1]) && (state["a"][0]===state["a"][2])) && (state["a"][0]!==null)) ||
//        (((state["b"][0]===state["b"][1]) && (state["b"][0]===state["b"][2])) && (state["b"][0]!==null)) ||
//        (((state["c"][0]===state["c"][1]) && (state["c"][0]===state["c"][2])) && (state["c"][0]!==null)) ||
//        (((state["a"][0]===state["b"][0]) && (state["a"][0]===state["c"][0])) && (state["a"][0]!==null)) ||
//        (((state["a"][1]===state["b"][1]) && (state["a"][1]===state["c"][1])) && (state["a"][1]!==null)) ||
//        (((state["a"][2]===state["b"][2]) && (state["a"][2]===state["c"][2])) && (state["a"][2]!==null)) ||
//        (((state["a"][0]===state["b"][1]) && (state["a"][0]===state["c"][2])) && (state["a"][0]!==null)) ||
//        (((state["a"][2]===state["b"][1]) && (state["a"][2]===state["c"][0])) && (state["a"][2]!==null))
//       )
//     {
//       return true;
//     }
//     else {return false;}
// }
//
// function checkEndOfGame() {
//     if
//      (
//         (state["a"][0]!==null) && (state["b"][0]!==null) && (state["c"][0]!==null) &&
//         (state["a"][1]!==null) && (state["b"][1]!==null) && (state["c"][1]!==null) &&
//         (state["a"][2]!==null) && (state["b"][2]!==null) && (state["c"][2]!==null)
//       )
//     {
//       return true;
//     }
//     else {return false;}
// }
