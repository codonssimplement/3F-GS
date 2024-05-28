// Function to check if email already exists
function emailExists(userData, email) {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email) {
            return true; // Email already exists
        }
    }
    return false; // Email does not exist
}

// Function to check password strength
// function checkPasswordStrength(password) {
//     // Password strength rules (customize as needed)
//     const minLength = 8;
//     const minMediumLength = 12;

//     const hasLowerCase = /[a-z]/.test(password);
//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasNumbers = /\d/.test(password);
//     const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

//     if (password.length < minLength) {
//         return "Weak";
//     } else if (password.length < minMediumLength || !hasLowerCase || !hasUpperCase || !hasNumbers) {
//         return "Medium";
//     } else if (!hasSymbols) {
//         return "Strong";
//     } else {
//         return "Very Strong";
//     }
// }

// // Function to update password input field color based on strength
// function updatePasswordColor() {
//     const passwordInput = document.getElementById("password");
//     const passwordStrength = checkPasswordStrength(passwordInput.value);
//     passwordInput.classList.remove("weak", "medium", "strong", "very-strong");
//     passwordInput.classList.add(passwordStrength.toLowerCase());
// }

// document.getElementById("password").addEventListener("input", updatePasswordColor);
// Function to hash the password
function simpleHash(password) {
    let hash = 0;
    if (password.length == 0) {
        return hash;
    }
    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status").value;

    if(password.length < 8){
        displayErrorMessage('Choisissez un mot de passe plus long')
      return 
    }

    // Retrieve existing user data from local storage
    let userData = JSON.parse(localStorage.getItem("userData"));

    // Check if userData is an array, if not initialize it as an empty array
    if (!Array.isArray(userData)) {
        userData = [];
    }

    // Check if email already exists
    if (emailExists(userData, email)) {
        displayErrorMessage("L'email existe déjà. Veuillez utiliser une autre adresse e-mail.");
        return;
    }

    // Hash the password
    const hashedPassword = simpleHash(password);

    // Create new user object
    const newUser = {
        name: name,
        email: email,
        password: hashedPassword,
        status: status
    };

    // Add new user to user data array
    userData.push(newUser);

    // Update user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

   // Reset form fields
   document.getElementById("registrationForm").reset();
//
   function displayErrorMessage(message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    const container = document.querySelector(".container");
    container.insertBefore(errorMessage, container.children[2]); // Insert before the third child (paragraph)
     // Remove error message after 3 seconds
     setTimeout(function() {
        errorMessage.remove();
    }, 4000); 
}
   // Redirect to login page
   window.location.href = "../LoginPage/login.html";
});


