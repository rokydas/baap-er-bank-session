const loginBtn = document.getElementById("login-submit")

loginBtn.addEventListener('click', function(event) {
    const userEmail = document.getElementById("user-email").value
    const userPassword = document.getElementById("user-password").value
    
    if(userEmail == "user@baap.com" && userPassword == "user") {
        window.location.href = "banking.html"
    }
    else {
        // alert("Your entered email or password is not correct")
        const errorMessage = document.getElementById("error-message")
        errorMessage.style.display = "block"
    }
    
})