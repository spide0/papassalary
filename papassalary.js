let fatherSalary = prompt("Enter Your Father's Salary: ");
let fCondition;

if(fatherSalary>=50000 && fatherSalary<=100000) {
    fCondition="rich-family";
}
else if(fatherSalary>=40000  && fatherSalary<=49000) {
    fCondition="upper-middle-class-family";
}
else if(fatherSalary>=30000  && fatherSalary<=39000 ) {
    fCondition="lower-middle-class-family";
}
else if(fatherSalary>=1000 && fatherSalary<=29000) {
    fCondition="poor-family";
}
console.log("Your Financial-Condiition is:",fCondition);
