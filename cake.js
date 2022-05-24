function cake(input) {
  let lenghtCake = Number(input[0]);
  let weightCake = Number(input[1]);
  let index = 2;

  let sizeCake = lenghtCake * weightCake;

  while (!(sizeCake <= 0)) {
    let takenPeaceText = String(input[index]);
    index++;
    if (takenPeaceText === "STOP") {
      break;
    } else {
      let takenPeace = Number(takenPeaceText);
      sizeCake -= takenPeace;
    }
  }
  if(sizeCake <= 0){
      console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`);
  }else{
      console.log(`${sizeCake} pieces are left.`);
  }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])


