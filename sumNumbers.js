function sumNumbers(input) {
  let firstNumber = Number(input[0]);
  let index = 1;
  let sum = 0;

  while (firstNumber > sum) {
    let count = Number(input[index]);
    sum += count;
    index++;
  }
  console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

