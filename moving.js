function moving(input) {
  let lenghtHouse = Number(input[0]);
  let weightHouse = Number(input[1]);
  let hightHouse = Number(input[2]);
  let index = 3;

  let totalSize = lenghtHouse * weightHouse * hightHouse;

  while (totalSize >= 0) {
    let boxesText = String(input[index]);
    index++;
    if (boxesText === "Done") {
      break;
    } else {
      let boxes = Number(boxesText);
      totalSize -= boxes;
    }
  }
  if (totalSize <= 0) {
    console.log(
      `No more free space! You need ${Math.abs(totalSize)} Cubic meters more.`
    );
  } else {
    console.log(`${totalSize} Cubic meters left.`);
  }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])