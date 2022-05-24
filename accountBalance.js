function accountBalance(input) {
  let sum = 0;
  let index = 0;
  while (true) {
    let deposit = String(input[index]);
    if (deposit === "NoMoreMoney") {
      break;
    }
    let counter = Number(deposit);
    if (deposit < 0) {
      console.log("Invalid operation!");
      break;
    }
    sum += counter;
    console.log(`Increase: ${counter.toFixed(2)}`);

    index++;
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
