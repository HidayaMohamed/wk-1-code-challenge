
// decalred the speed variable with let keyword. 
let speed = 80;

// used if else selection to determine if the speed is over 70.
if (speed <= 70) {
  console.log("Ok.");
}
/** if the speed is over 70, overSpeed is calculated 
 * by subtracting 70 from the speed. 
 * it then goes ahead and calculates demeritPoints by dividing the overSpeed by 5
 * ssince a point is added for every 5km/s.
 * it displayes demerit points and if the points are greater 
 * than 12 it displays a message.*/ 
else {
  overSpeed = speed - 70;
  demeritPoints = overSpeed / 5;
  console.log(demeritPoints);
  if (demeritPoints > 12) {
    console.log("License suspended.");
  }
}

console.log(speed);
