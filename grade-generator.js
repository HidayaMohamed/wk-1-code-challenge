let marks = prompt("Please enter marks:");
console.log(marks);

if (marks > 100 || marks < 0) {
  console.log("Marks invalid.");
} else if (marks >= 79) {
  console.log("Grade = A ");
} else if (marks >= 60) {
  console.log("Grade =B");
} else if (marks >= 49) {
  console.log("Grade = C");
} else if (marks >= 40) {
  console.log("Grade = D");
} else if (marks < 40) {
  console.log("Grade = E");
} else {
  console.log("input marks");
}

console.log(marks);
