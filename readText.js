function readText (input){
let index = 0;
let city = input[index];

while (city !== "Stop") {
  
  console.log(city);

index++;
city = input[index];
}
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
