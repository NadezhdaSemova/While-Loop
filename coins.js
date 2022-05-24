function coins(input) {
  let money = Number(input[0]);

  let counter = 0;
  while (money !== 0) {
    money = money.toFixed(2);
    if (money >= 2) {
      counter++;
      money -= 2;
    } else if (money >= 1) {
      counter++;
      money -= 1;
    } else if (money >= 0.5) {
      counter++;
      money -= 0.5;
    } else if (money >= 0.2) {
      counter++;
      money -= 0.2;
    } else if (money >= 0.1) {
      counter++;
      money -= 0.1;
    } else if (money >= 0.05) {
      counter++;
      money -= 0.05;
    } else if (money >= 0.02) {
      counter++;
      money -= 0.02;
    } else if (money >= 0.01) {
      counter++;
      money -= 0.01;
    }
  }
  console.log(counter);
}
coins(["2"])
