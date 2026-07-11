let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("#loginForm")
let emailError = document.querySelector("#emailError")
let passwordError = document.querySelector("#passwordError")
let successMsg = document.querySelector("#successMsg")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    emailError.textContent = "";
    passwordError.textContent="";
    successMsg.textContent = ""

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

 let emailAns = emailRegex.test(email.value)
 let passwordAns = passwordRegex.test(password.value);

 if(!emailAns){
    emailError.textContent = "Email is incorrect"

 }
 if(!passwordAns){
    passwordError.textContent = "Password is incorrect"


 }
 if(emailAns && passwordAns){
 successMsg.textContent = "Form Submit"
 successMsg.classList.add("success")


 }
})