// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```

let stdout=["","","","","","","","",""];

for (let ligne = 0; ligne < 9 ; ligne++)
{ for (let colonne = 0; colonne < 30 ; colonne++)
{
  if ((ligne===1 && colonne===24) || (ligne===8 && colonne===6))
  {
    stdout[ligne]= stdout[ligne]+ "X";
  }
  else if ((ligne===3 && colonne===5)|| (ligne===6 && colonne===17))
  {
    stdout[ligne]= stdout[ligne]+ "0";
  }
  else
  {
    stdout[ligne]= stdout[ligne]+ "~";
  }
}
console.log(stdout[ligne]);
}
