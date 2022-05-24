function minNumber(input) {
  let index = 0;
  let min = Number.MAX_SAFE_INTEGER;

  while (true) {
    let currentNumText = String(input[index]);
    if (currentNumText === "Stop") {
      break;
    }
    let currentNum = Number(currentNumText);
    if (currentNum < min) {
      min = currentNum;
    }
    index++;
  }
  console.log(min);
}
minNumber(["45", "-20", "7", "99", "Stop"]);
