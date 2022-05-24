function maxNumber(input) {
  let index = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (true) {
    let currentNumText = String(input[index]);
    if (currentNumText === "Stop") {
      break;
    }
    let currentNum = Number(currentNumText);
    if (currentNum > max) {
      max = currentNum;
    }
    index++;
  }
  console.log(max);
}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])


