function Check()
{
  var display = document.getElementById("display").value;
  var regEx = /^[+-]?[0-9]{1,10}([.,][0-9]{1,5})?$/;
  return regEx.test(display);  
}

function Validate()
{
  var res = document.getElementById("result");
  if (Check(display))
  {
    res.innerHTML = "It's true";
  }
  else
  {
    res.innerHTML = "It's false";
       
  }
} 