// Switch to login form
document.getElementById("showLogin").addEventListener("click", () => {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Cash-Hub || Log In";
});

// Switch to signup form
document.getElementById("showSignup").addEventListener("click", () => {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("titleChange").textContent = "Cash-Hub || Sign Up";
});

// Retrieve stored users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save updated users to localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Sign up
document.getElementById("signupBtn").addEventListener("click", () => {
    let name = document.getElementById("signupName").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let phoneNumber = document.getElementById("signupNumber").value.trim();
    let nameError = document.getElementById("signupNameError");
    let passwordError = document.getElementById("signupPasswordError");
    let emailError = document.getElementById("signupEmailError");
    let numberError = document.getElementById("signupNumberError");

    // Reset error messages
    nameError.textContent = "";
    passwordError.textContent = "";
    emailError.textContent = "";


    // Validation checks
    if (!name) {
        nameError.textContent = "Enter your name";
        return;
    }
    if (!password) {
        passwordError.textContent = "Enter your password";
        return;
    }
    if (password.length < 5) {
        passwordError.textContent = "Password must be at least 5 characters";
        return;
    }
    if (!email) {
        emailError.textContent = "Enter a valid email address";
        return;
    }
    if (!phoneNumber) {
        numberError.textContent = "Enter Phone Number";
        return;
    }   
    if (phoneNumber.length < 11){
        numberError.textContent = "Phone NUmber muct be 11 digits long !!";
        return;
    }

    let users = getUsers();
    let userEmailExist = users.some(user => user.email === email);
    let usernameExists = users.some(user => user.username === name);
    let userNumberExist = users.some(user => user.phoneNumber === phoneNumber);

    if (usernameExists) {
        nameError.textContent = "Username already exists! Choose another one.";
        return;
    }

    if (userEmailExist) {
        emailError.textContent = "Email already exists! Choose another one.";
        return;
    }

    if (userNumberExist) {
        numberError.textContent = "Phone Number already exist! Choose another one.";
        return;
    }

    // Save the new user to local storage
    users.push({ username: name, password, email, phoneNumber });
    saveUsers(users);

    alert("Signup successful! You can now log in.");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});

// Log in
document.getElementById("loginBtn").addEventListener("click", () => {
    let password = document.getElementById("loginPassword").value.trim();
    let email = document.getElementById("loginEmail").value.trim();
    let passwordError = document.getElementById("loginPasswordError");
    let emailError = document.getElementById("loginEmailError");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validation checks
    if (!email) {
        emailError.textContent = "Enter a valid email address";
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

    let users = getUsers();
    let user = users.find(user => user.password === password && user.email === email);

    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user)); // Store current user
        alert(`Welcome back my gee ${user.username}!`); // Fixed extra bracket
        window.location.href = "index.html";
    } else {
        emailError.textContent = "Invalid username or credentials";
    }
});
