var display = document.getElementById("display")

function addNumber(button)
{

	var number = button.value

	display.value += number

	console.log(number)
}
function addOperand(button)
{
	
}
function clearDisplay()
{
	display.value=""
}