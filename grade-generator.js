/**
 *  decalres marks using let keyword,
 * and writes a prompt that will tell the user to input marks*/
let marks = prompt("Please enter marks:");

/**
 * writes if else selection to ensure the user is only prompted once
 * and if they don't input marks a mesage is displayed.
 */

if (marks !== null && marks !== "") {
  console.log(marks);
} else {
  console, log("input marks");
}

// ! This are if sets used to determine grades.
/**The first if sets conditions to not accept marks
 * greatter than 100 and less than 0 */
if (marks > 100 || marks < 0) {
  console.log("Marks invalid.");
} else if (marks >= 79) {
  /**The second if grades marks greater than or
   *  eqaul to79 as A*/
  console.log("Grade = A ");
} else if (marks >= 60) {
  /**This is the third if and it grades B for marks
   * greater than or eqaul to 60*/
  console.log("Grade = B");
} else if (marks >= 49) {
  /**This is the fourth if and it grades C for marks
   * greater than or eqal to 49
   */
  console.log("Grade = C");
} else if (marks >= 40) {
  /** This is the fifth if and it grades D for marks
   * greater rhan or equal to 40
   */
  console.log("Grade = D");
} else if (marks < 40) {
  /** This is the sixth if and is grades E for marks
   * less than 40.*/
  console.log("Grade = E");
}
// This is the last if and it displays 'input marks' if no marks are input.
else {
  console.log("input marks");
}
console.log(marks);
