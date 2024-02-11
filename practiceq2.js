let num=prompt("enter number:");
let grade;

if (num>=90 && num<=100) {
    grade="A";
} else if (num>=70 && num<=89) {
    grade="B";
} else if (num>=60 && num<=69) {
    grade="C";
} else if (num>=50 && num<=59) {
    grade="D";
} else if (num>= 0 && num<=49) {
    grade="F";
}
console.log("your grade is :",grade);
