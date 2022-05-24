function examPreparation(input) {
  let numberFail = Number(input[0]);
  let index = 1;

  let counterFail = 0;
  let countrExams = 0;
  let currentExam = "";
  let sum = 0;
  let end = false;

  while (numberFail !== counterFail) {
    let examName = String(input[index]);
    index++;
    let evaluation = Number(input[index]);
    index++;
    if (evaluation >= 4) {
      countrExams++;
      sum += evaluation;
      currentExam = examName;
    } else {
        counterFail++;
    }
    if (examName === "Enough") {
      end = true;
      break;
    }
  }
  if (end) {
    console.log(`Average score: ${(sum / countrExams).toFixed(2)}`);
    console.log(`Number of problems: ${countrExams}`);
    console.log(`Last problem: ${currentExam}`);
  }else{
      console.log(`You need a break, ${counterFail} poor grades.`);
  }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])


