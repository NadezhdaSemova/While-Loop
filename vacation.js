function vacation(input) {
  let neededMoney = Number(input[0]);
  let startMoney = Number(input[1]);
  let index = 2;

  let counterDays = 0;
  let counterSpend = 0;

  while (startMoney < neededMoney && counterSpend < 5) {
    let type = String(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    
    if (type == "save") {
      startMoney += money;
      counterSpend = 0;
    } else if (type == "spend") {
      counterSpend++;
      startMoney -= money;
    }
    if (startMoney < 0) {
      startMoney = 0;
    }
    counterDays++;
  }
  if (counterSpend === 5) {
    console.log("You can't save the money.");
    console.log(counterSpend);
  }
  if (neededMoney <= startMoney) {
    console.log(`You saved the money for ${counterDays} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
