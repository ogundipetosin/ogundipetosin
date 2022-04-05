function addition(a,b){
    return a+b;
    alert(addition);
}
function Subtraction(a,b){
    return a-b;
    alert(Subtraction);
}
function multiplication(a,b){
    return a*b;
    alert(multiplication);
}
function division(a,b){
    return a/b;
    alert(division);
}
var operator=prompt("Enter 1 for sum, 2 for Subtract, 3 for mutiply, 4 to divide");
var a=Number(prompt("Enter the first number"));
var b=Number(prompt("Enter the second number"));
if (operator==="1"){
    alert(addition(a,b));
}
else if (operator==="2"){
    alert(Subtraction(a,b));
}
else if (operator==="3"){
    alert(multiplication(a,b));
}
else if (operator==="4"){
    alert(division(a,b));
}
else{
    alert("Invalid Number Selected");
}