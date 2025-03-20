document.getElementById("showLogin").addEventListener("click",  ()=> {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Cash-Hub || Log In";
    // document.getElementById("bgChange").style.backgroundColor ="green"
    
});

document.getElementById("showSignup").addEventListener("click",  () =>{
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Cash-Hub || Sign Up";

    // titleChange.textContent = "";
    // bgChange.style.backgroundColor ="red";

});

// sign up 
document.getElementById("signupBtn").addEventListener("click",  () =>{
    let name = document.getElementById("signupName").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let nameError = document.getElementById("signupNameError");
    let passwordError = document.getElementById("signupPasswordError");
    let emailError = document.getElementById("signupEmailError");


    // sets sign up error message to null

    nameError.textContent = "";
    passwordError.textContent = "";
    passwordError.textContent = "";

    // checks if each input sign up are empty or incorrect

    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password ) {
        passwordError.textContent = "Enter your password";
        return;
    }
    if (password.length < 5) {
        passwordError.textContent = "Password must be at least 5 characters ";
        return
    }
    if (!email){
        emailError.textContent ="Enter Valid Email Adress";
        return
    }

    // saving sign up input value to local stprage using setItem()

    localStorage.setItem("Username", name);
    localStorage.setItem("Password", password);
    localStorage.setItem("Email", email);
     
    // redirects you to to log in once sign up is complete

    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// log in 
document.getElementById("loginBtn").addEventListener("click", () => {
    let name = document.getElementById("loginName").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let email = document.getElementById("loginEmail").value.trim();
    let nameError = document.getElementById("loginNameError");
    let passwordError = document.getElementById("loginPasswordError");
    let emailError = document.getElementById("loginEmailError");

    // sets sign up error message to null

    nameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";

    // checks if each input sign up are empty or incorrect

    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }
    if (password.length < 5) {
        passwordError.textContent = "Password must be at least 5 characters long";
        return;
    }
    if (!email) {
        emailError.textContent = "Enter a valid email address";
        return;    
    }

    // getting log in input value from local storage using getItem()

    let storedName = localStorage.getItem("Username");
    let storedPassword = localStorage.getItem("Password");
    let storedEmail = localStorage.getItem("Email");

    // checking if  log in input value matches with the sign up input values set() in the local storage
    //  if it does not matches it returns an error message of Invalid username or credentials in all input errors fields

    if (name === storedName && password === storedPassword && email === storedEmail) {
        localStorage.setItem("isLoggedIn", "true");
        alert(`Welcome back my gee ${name} `);
        window.location.href = "index.html";
    } else {
        nameError.textContent = "Invalid username or credentials";
        passwordError.textContent = "Invalid username or credentials";
        emailError.textContent = "Invalid username or credentials";
    }
});
