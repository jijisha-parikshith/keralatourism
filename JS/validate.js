var newName    =document.getElementById("newName");
var email   =document.getElementById("email");
var newPass=document.getElementById("newPass");
var addr =document.getElementById("addr");
var phone   =document.getElementById("phone");
var country =document.getElementById("country");
var regexp= /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var error    =document.getElementById("error");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var checkform =document.getElementById("checkform");
var strength = document.getElementById('strength');
var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{3,}).*", "g");

function loginValidate(){
    if(email.value=="")
    {
      email.focus();
      email.style.border="solid 3px red  ";
      email.setAttribute("placeholder","Email cannot be empty");
      return false;
    }
     if(regexp.test(email.value)==false)
    {
     email.value="";
     email.focus();
     email.style.border="solid 3px red  ";
    email.setAttribute("placeholder","Email should be valid");
    return false;
    
    }
    email.style.border="none";
    if(newPass.value=="")
    {
    newPass.focus();
    newPass.style.border="solid 3px red  ";
    newPass.setAttribute("placeholder","Password cannot be empty");
    return false;
    }else if (newPass.value.length<8) {
        newPass.value="";
        newPass.focus();
        newPass.style.border="solid 3px red  ";
        newPass.style.border="solid 3px red  ";
        newPass.setAttribute("placeholder","Password must not be less than 8 characters");
        return false;
    }else{
      newPass.style.border="none";

      //new code
      if (strongRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:green" class="spaStyle">Strong!</div>';
        return true;

    } else if (mediumRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:orange;background-color:white;" class="spaStyle">Please enter a password containing symbols,numbers,uppercase letters etc!</div>';
        return true;

    } else  {
        strength.innerHTML = '<div style="color:red;background-color:white;" class="spaStyle">Please enter a password containing symbols,numbers,uppercase letters etc!</div>';
        return false;

    }
      //new code
    }
}

function pwdStrngth() {
  if (strongRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:green" class="spaStyle">Strong!</div>';
       
    } else if (mediumRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:orange" class="spaStyle">Medium!</div>';
        
    } else  {
        strength.innerHTML = '<div style="color:red" class="spaStyle">Poor!</div>';
        
    }

}



function pwdnewStrngth(){
    if (strongRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:green" class="spaStyle">Strong!</div>';
        return true;
      } else if (mediumRegex.test(newPass.value)) {
        strength.innerHTML = '<div style="color:orange" class="spaStyle">Medium!</div>';
        return false;

    } else  {
        strength.innerHTML = '<div style="color:red" class="spaStyle">Poor!</div>';
        return false;

    }
  
}


function validate()
{
if(newName.value=="")
{
  newName.focus();
  newName.style.border="solid 3px red  ";
  newName.setAttribute("placeholder","Name cannot be empty");
    return false;
}
newName.style.border="none";

if(email.value=="")
{
  email.focus();
  email.style.border="solid 3px red  ";
  email.setAttribute("placeholder","Email cannot be empty");
  return false;
}
 if(regexp.test(email.value)==false)
{
 email.value="";
 email.focus();
 email.style.border="solid 3px red  ";
email.setAttribute("placeholder","Email should be valid");
return false;

}
email.style.border="none";
if(newPass.value=="")
{
// alert("Please enter a password");
newPass.focus();
newPass.style.border="solid 3px red ";
newPass.setAttribute("placeholder","Password cannot be empty");
return false;;
}else if(newPass.value.length<8)
{
newPass.value="";
newPass.focus();
newPass.style.border="solid 3px red  ";
newPass.setAttribute("placeholder","Password should contain minimum 8 letters!!");
return false;
}  


newPass.style.border="none";

if(addr.value=="")
{
  addr.focus();
  addr.style.border="solid 3px red  ";
  addr.setAttribute("placeholder","Address cannot be empty");
return false;;
}
addr.style.border="none";

if(phone.value=="")
{
  phone.focus();
  phone.style.border="solid 3px red  ";
  phone.setAttribute("placeholder","Phone Number cannot be empty");
  return false;;
}
if(phone.value.match(phoneno))
{
  if(country.value=="")
{
  phone.style.border="none";
// 
  country.focus();
  country.style.border="solid 3px red  ";
  country.setAttribute("placeholder","Country cannot be empty");
return false;
} else {
  
  if (strongRegex.test(newPass.value)) {
    strength.innerHTML = '<div style="color:green" class="spaStyle">Strong!</div>';
    return true;
  }
}
}else
{
phone.value="";
 phone.focus();
 phone.style.border="solid 3px red  ";
phone.setAttribute("placeholder","Phone Number should be valid");
return false;
}
phone.style.border="none";

if(country.value=="")
{
  country.focus();
  country.style.border="solid 3px red  ";
  country.setAttribute("placeholder","Country cannot be empty");
return false;
} 
if (strongRegex.test(newPass.value)) {
  strength.innerHTML = '<div style="color:green" class="spaStyle">Strong!</div>';
  return true;
} else if (mediumRegex.test(newPass.value)) {
  strength.innerHTML = '<div style="color:orange" class="spaStyle">Enter a password containing symbols,numbers and capital letters</div>';
  return false;
} else  {
  strength.innerHTML = '<div style="color:red" class="spaStyle">Enter a password containing symbols,numbers and capital letters!</div>';
  return false;
}



// country code written here to check country field even if password is empty
}

