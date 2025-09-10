/**This program takes an employee basic salary and benefits,
 *  it then calculates gross salary, PAYE, SHIF and NSSF deductions
 *  and returns the net salary  */

// the netSalary function takes basicSalary and benefits as parameters.
function netSalary(basicSalary, benefits) {
  /** The if function here checks for the basicSalary amount and
   * if it satifies the condition executes the subsequent codes codes. */
  if (basicSalary <= 24000) {
    grossSalary = basicSalary + benefits;
    tax = basicSalary * 0.1;
    shif = grossSalary * 0.0275;
    nssf = grossSalary * 0.06;
    deductions = tax + shif + nssf;
    netsalary = grossSalary - deductions;
    return `Your Gross Salary is ${grossSalary}, PAYE is ${tax}, SHIF deduction is ${shif}, NSSF deduction is ${nssf}, net Salary is ${netsalary} `;
  } else if ((basicSalary <= 32, 333)) {
    grossSalary = basicSalary + benefits;
    tax = basicSalary * 0.25;
    shif = grossSalary * 0.0275;
    nssf = grossSalary * 0.06;
    deductions = tax + shif + nssf;
    netsalary = grossSalary - deductions;
    return `Your Gross Salary is ${grossSalary}, PAYE is ${tax}, SHIF deduction is ${shif}, NSSF deduction is ${nssf}, net Salary is ${netsalary} `;
  } else if (basicSalary <= 500000) {
    grossSalary = basicSalary + benefits;
    tax = basicSalary * 0.3;
    shif = grossSalary * 0.0275;
    nssf = grossSalary * 0.06;
    deductions = tax + shif + nssf;
    netsalary = grossSalary - deductions;
    return `Your Gross Salary is ${grossSalary}, PAYE is ${tax}, SHIF deduction is ${shif}, NSSF deduction is ${nssf}, net Salary is ${netsalary} `;
  } else if (basicSalary <= 800000) {
    grossSalary = basicSalary + benefits;
    tax = basicSalary * 0.325;
    shif = grossSalary * 0.0275;
    nssf = grossSalary * 0.06;
    deductions = tax + shif + nssf;
    netsalary = grossSalary - deductions;
    return `Your Gross Salary is ${grossSalary}, PAYE is ${tax}, SHIF deduction is ${shif}, NSSF deduction is ${nssf}, net Salary is ${netsalary} `;
  } else {
    grossSalary = basicSalary + benefits;
    tax = basicSalary * 0.35;
    shif = grossSalary * 0.0275;
    nssf = grossSalary * 0.06;
    deductions = tax + shif + nssf;
    netsalary = grossSalary - deductions;
    return `Your Gross Salary is ${grossSalary}, PAYE is ${tax}, SHIF deduction is ${shif}, NSSF deduction is ${nssf}, net Salary is ${netsalary} `;
  }
}
console.log(netSalary(38000, 5000));
