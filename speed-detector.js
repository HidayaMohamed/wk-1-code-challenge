let speed;

if (speed <= 70) {
  console.log("Ok.");
} else {
  overSpeed = speed - 70;
  demeritPoints = overSpeed / 5;
  console.log(demeritPoints);
  if (demeritPoints > 12) {
    console.log("License suspended.");
  }
}

console.log(speed);
