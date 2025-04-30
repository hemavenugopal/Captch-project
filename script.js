
const captchaValue = document.getElementById("captchaValue");
const inputBox = document.getElementById("inputBox");
const btn = document.getElementById("btn");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Function to generate the captcha
function generateCaptcha(){
    let generatedCaptcha = "";
    for(let i = 0; i < 6; i++){
        generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    captchaValue.innerHTML = generatedCaptcha;
}

// Initial captcha generation
generateCaptcha();

// Event listener for button click
btn.addEventListener("click", function(){
    if(inputBox.value === ""){
        alert("Please enter captcha");
    } else if(captchaValue.textContent === inputBox.value){
        alert("Captcha is correct");
    } else {
        alert("Captcha is wrong");
        generateCaptcha(); 
        inputBox.value = ""
    }
});
