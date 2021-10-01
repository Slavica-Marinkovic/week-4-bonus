const error_first_name = document.querySelector(".error-first-name");
const error_last_name = document.querySelector(".error-last-name");
const error_email = document.querySelector(".error-email");
const error_password = document.querySelector(".error-password");

var mailFormat = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
var fName = document.querySelector(".first-name");
var lName = document.querySelector(".last-name");
var email = document.querySelector(".email");
var password = document.querySelector(".password");



document.getElementById("btn").addEventListener('click', function(e){
    e.preventDefault();
  
    var fNameVal = document.querySelector(".first-name").value.trim();
    var lNameVal = document.querySelector(".last-name").value.trim();
    var emailVal = document.querySelector(".email").value.trim();
    var passwordVal = document.querySelector(".password").value.trim();

    if(fNameVal == ""){
       error_first_name.classList.add("show-error-msg");
       fName.classList.add('show-error-sign', 'show-red-border');
    }
    if(lNameVal == ""){
        error_last_name.classList.add("show-error-msg");
        lName.classList.add('show-error-sign', 'show-red-border');
     }
     if(emailVal == ""){
        error_email.classList.add("show-error-msg");
        email.classList.add('show-error-sign', 'show-red-border');
     } else if (!emailVal.match(mailFormat)){
         error_email.classList.add("show-error-msg");
         error_email.innerHTML = "Looks like this is not an email";
         email.classList.add('show-error-sign', 'show-red-border');
         email.style.color ="#ff7a7a";
     }
     if(passwordVal == ""){
        error_password.classList.add("show-error-msg");
        password.classList.add('show-error-sign', 'show-red-border');
     }
    
});