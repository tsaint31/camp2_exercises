


function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

//affichage de la ligne
function renderRow(letter,cells) {
  const row = cells.map(renderCell).join(" | ");
  return `${letter} ${row}`;
}

// affichage du board
function renderBoard(state) {
  const letters = Object.keys(state);
  let rows = "";
  for (let i=0;i<letters.length;i++) {
    const cells = state[letters[i]];
    rows =rows+renderRow(letters[i],cells);
    if (i<2) {
      rows =`${rows}\n`;}
  }
  const header = "  1   2   3";

  return `${header}\n${rows}`;
}


module.exports = {
  renderBoard: renderBoard,
};
