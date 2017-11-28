// Modify this value to test with other values
const numberOfLine = 4;
// Your code here ⬇
const resultat=[];
let line="";
let caract="";
let temp;


for (let i=0; i<numberOfLine;i++) {
  for (let j=0;j<numberOfLine-i;j++) {
    temp=numberOfLine-j;
    caract= `${temp}`;
    line=line+temp;
  }
  resultat.push(line);
  line="";
}
for (let i=0;i<resultat.length;i++) {
  console.log(resultat[i]);
}
