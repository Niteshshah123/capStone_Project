const email = document.querySelector("#Email");
const password = document.querySelector("#password");
const loginbox = document.querySelector(".signinbox2");
const loginbtn = document.querySelector("#Submit");
var emailtype = /^[a-zA-Z0-9]+[@]+[a-zA-Z]+[\.]+[a-zA-Z]+$/;
var usernametype = /^[A-Za-z\s]{2,}$/;
function isvalid(){
    if (emailtype.test(email.value) && password.value!="" && email!="") {
        alert("Sign Up Sucessfully!")
        return true;
    }
    else if(password.value==""){
        alert("PassWord is Required");
        return false;
    }
    else if(email.value==""){
        alert("Email is Required");
        return false;
    }
    else if(!emailtype.test(email.value)){
        alert("Incorrect Email");
        return false;
    }
    
}
loginbox.addEventListener("mouseenter", function(){
    loginbox.style.backgroundColor="#B8B2EE";
    loginbtn.style.backgroundColor="#B8B2EE";
})
loginbox.addEventListener("mouseleave", function(){
    loginbox.style.backgroundColor="#fff";
    loginbtn.style.backgroundColor="#fff";
})
