// Modify this value to test with other values
const numberOfLine = 8;
// Your code here ⬇
const resultat=[];
let line="";
let caract="";
let temp;
let result="";


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
  result=result+`${resultat[i]}\n`;
}
console.log(result);
