var operator = prompt('Enter 1 for sum, 2 for Subtract, 3 for mutiply, 4 to divide');
var firstNumber=Numberprompt('Enter the first number');
var secondNumber=Numberprompt('Enter the second number');
if(operator===1){
    var sum= firstNumber+secondNumber;
    alert(sum)
}
if(operator===2){
    var Subtract= firstNumber-secondNumber;
    alert(Subtract)
}
if(operator===3){
    var mutiply= firstNumber*secondNumber;
    alert(mutiply)
}
if(operator===4){
    var divide= firstNumber/secondNumber;
    alert(divide)
}
else{
    alert("Invalid Number Selected")
}
