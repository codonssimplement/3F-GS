// home.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginBtn").addEventListener("click", function() {
        window.location.href = "Pages/LoginPage/login.html"; 
    });

    document.getElementById("manageFoldersBtn").addEventListener("click", function() {
        window.location.href = "Pages/LoginPage/login.html"; 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Hide loading screen after 2 seconds
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
    }, 750);
});
