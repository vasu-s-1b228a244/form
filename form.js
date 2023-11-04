const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();

})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    if(usernameVal===' '){
        setError(username,'username is required')
    }
    else{
    setSuccess(username)
    }
    if(emailVal===' '){
        setError(email,'email  is required')
    }
    else if(!ValidateEmail(emailVal)){
    setError(email,'email is invalid ')
    }
    else{
    setSuccess(email)
    }
if(password===' '){
    setError(password,'password is required')
}
else if(passwordVal.length<8){
    setError(password,'password mut be atleast 8 character')
}
else {
    setSuccess(password)
}
 if(cpassword===''){
setError(cpassword,'confirm password is required ')
 }
 else if(cpasswordVal!==passwordVal){
    setError(cpassword,'passworf does not match')
 } 
 else {
    setSuccess(cpassword)
 }
}


function setError(element,message){
    const inputGroup=element.parentEelement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerTesxt=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup=element.parentEelement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerTesxt=' ';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}