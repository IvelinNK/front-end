var display = document.getElementById("display")
function clearDisplay(val)
{
  document.getElementById("display").value=val;
}	 

function clearLast()
{
var string = display.value
var str = string.substring(0, string.length-1);
document.getElementById("display").value=str;
}  

function addNumber(buttonValue) 
{ 
    if (display.value === '') 
    { 
        display.value = buttonValue; 
    } 
    else 
    { 
        display.value += buttonValue; 
    } 
} 

function addOperand(operatorValue) 
{ 
    var lastChar = display.value[display.value.length -1]; 
    if (display.value !== '' && lastChar.match(/\d$/)) 
    { 
        display.value += operatorValue; 
    } 
    if (display.value === '' && operatorValue === '-') 
    { 
        display.value += operatorValue; 
    } 
} 



function equal() 
{ 
    var equation = display.value; 
    var lastChars = equation[equation.length -1]; 
    if (lastChars.match(/\+|-|\/|\*|\.$/) ) 
    { 
        equation = equation.replace(/.$/, ''); 
    } 
    display.value = eval(equation); 
} 
