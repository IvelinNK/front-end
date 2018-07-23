
function checkFName()
{
    var fname = document.getElementById('fname')
    var message = document.getElementById ('error-fname')
    if(fname.value.length > 0 && fname.value.length < 16)
    {
        message.innerHTML=""
    }
    else
    {
        message.innerHTML = "First name must be between 1 and 15 symbols"
    }
}



function checkLName()
{
    var lname = document.getElementById('lname')
    var message = document.getElementById ('error-lname')
    if(lname.value.length > 0 && lname.value.length < 16)
    {
        message.innerHTML=""
    }
    else
    {
        message.innerHTML = "Last name must be between 1 and 15 symbols"
    }
}



function checkAge()
{
    var age = document.getElementById('age')
    var message = document.getElementById('error-age')
    if (age.value > 17 && age.value <119)
    {
        message.innerHTML=""
    }
    else
    {
        message.innerHTML = "Age must be a number between 18 and 118" 
    }
}


function checkEgn()
{
    var egn = document.getElementById('egn');
    var message = document.getElementById('error-egn')
    if (egn.value.length == 10)
    {
        message.innerHTML=""
    }
    else
    {
        message.innerHTML = "The EGN must be 10 numbers"
    }
}



function checkPass()
{
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('error-nwl');
 	
    if(pass1.value.length > 7 && pass1.value.length < 17)
    {
        message.innerHTML = ""
    }
    else
    {
        message.innerHTML = " The password must be between 8 and 16 letters or/and numbers!"
        return;
    }
  
    if(pass1.value == pass2.value)
    {
        message.innerHTML = ""
    }
	else
    {
        message.innerHTML = " These passwords don't match"
    }
}  

