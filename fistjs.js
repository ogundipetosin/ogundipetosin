var operator=prompt("Enter 1 for sum, 2 for Subtract, 3 for mutiply, 4 to divide");
var firstNumber=Number(prompt("Enter the first number"));
var secondNumber=Number(prompt("Enter the second number"));
if (operator==="1"){
    var addition=firstNumber + secondNumber;
    alert(addition);
}
else if (operator==="2"){
    var minus=firstNumber-secondNumber;
    alert(minus);
}
else if (operator==="3"){
    var mutiply=firstNumber*secondNumber;
    alert(mutiply);
}
else if (operator==="4"){
    var divide=firstNumber/secondNumber;
    alert(divide);
}
else{
    alert("Invalid Number Selected");
}
