function walking(input) {
  let index = 0;
  let total = 0;

  while (true) {
    let stepsText = String(input[index]);
    index++;

    if (stepsText === "Going home") {
      steps = Number(input[index]);
      total += steps;
      break;
    } else {
      let steps = Number(stepsText);
      total += steps;
    }
    if (total >= 10000) {
      break;
    }
  }
  if (total >= 10000) {
    console.log(`Goal reached! Good job!`);
    console.log(`${total - 10000} steps over the goal!`);
  } else {
    console.log(`${10000 - total} more steps to reach goal.`);
  }
}
walking(["1000",
"1500",
"2000",
"6500"])

