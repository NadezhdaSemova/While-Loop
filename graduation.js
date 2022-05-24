function graduation(input){
let nameStudent = String(input[0]);
let index = 1;
let counter = 0;
let counterDegree = 0;
let sum = 0;

while(!(counterDegree === 12)){
let evaluation = Number(input[index]);

if (evaluation >= 4){
sum += evaluation;
counterDegree++;
}else{
    counter++;
}
if(counter > 1){
    counterDegree++;
    console.log(`${nameStudent} has been excluded at ${counterDegree} grade`);
break;
}
index++;
}
if (counterDegree === 12){
    console.log(`${nameStudent} graduated. Average grade: ${(sum / 12).toFixed(2)}`)
}
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

