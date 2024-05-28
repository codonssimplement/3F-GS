document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Check if email exists in local storage
    const user = userData.find(user => user.email === email);
    if (!user) {
        displayErrorMessage("Invalid email address or password.");
        return;
    }

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
    
    // Hash the entered password for comparison
    const hashedPassword = simpleHash(password);

    // Check if hashed password matches the stored hashed password
    if (hashedPassword !== user.password) {
        displayErrorMessage("Invalid email address or password.");
        return;
    }

    
     // Redirect based on user status
     switch (user.status) {
        case "Head_of_Sector":
            window.location.href = "../HeadSectorPage/headSector.html";
            break;
        case "Manager_Mission":
            window.location.href = "../ManagerMissionPage/managerMission.html";
            break;
        case "Responsible_of_Habitat":
            window.location.href = "../ResponsibleHabitatPage/responsibleHabitat.html";
            break;
        default:
            // Redirect to default page if status is not recognized
            window.location.href = "../HomePage/home.html";
            break;
    }

});

function displayErrorMessage(message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    const container = document.querySelector(".container");
    container.insertBefore(errorMessage, container.children[2]); // Insert before the third child (paragraph)
     // Remove error message after 3 seconds
     setTimeout(function() {
        errorMessage.remove();
    }, 3000); 
}
// Toggle password visibility
// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const path = document.querySelector(".toggle-password path");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        path.setAttribute("d", "M528 320c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 5.5 0.7 10.9 2 16c-12.2 20.5-27.6 39.3-46.3 55.1c-18.6 15.7-40.3 28.3-63.7 36.9c-23.4 8.6-48.1 13-74.4 13s-51-4.4-74.4-13c-23.4-8.6-45.1-21.2-63.7-36.9c-18.6-15.7-34-34.6-46.3-55.1 c1.3-5.1 2-10.5 2-16c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 59.5 30.8 111.8 77.5 142.3c-15.3 19.6-27.5 41.8-36.3 65.7C54 456.1 45.5 477.1 42 499.9C41.4 504.5 43.9 509 48.5 509c0.8 0 1.6-0.1 2.4-0.4c25.6-7.8 51.8-12 79.1-12c27.3 0 53.5 4.2 79.1 12 c0.8 0.2 1.7 0.4 2.5 0.4c4.5 0 7-4.5 6.5-9.1c-8.5-67.6 14.3-135.6 57.4-190.6c43.1-55 105.5-86.3 173.1-86.3c29.8 0 59.4 7.6 86.5 22.1 c27.2 14.5 50.4 35.7 67.7 62.2c17.3 26.6 27.4 57.9 29.4 89.7C526.3 330.9 528 325.5 528 320zM464 320c0 17.6-14.4 32-32 32 s-32-14.4-32-32s14.4-32 32-32S464 302.4 464 320z M528 96C375.8 96 256 215.8 256 368c0 0.7 0 1.3 0 2c-34.7-10.6-67.5-28.5-96-52c-29.7-24.3-54.4-56.3-72.4-94.4 c-18.3-38.8-28.5-82.1-28.5-126C64 166.4 169.4 64 288 64s224 102.4 224 224c0 44-10.2 87.3-28.5 126c-18 38.2-42.7 70.2-72.4 94.4 c-28.6 23.5-61.4 41.4-96 52C512 368 512 228.6 512 98.1C512 97.4 512 96.7 512 96 C516.6 96 520 99.4 520 104C520 145.6 524.3 187 532.4 227.1C545.1 186.2 544 147.7 528 112c-2-31.8-12.1-63.1-29.4-89.7c-17.3-26.5-40.5-47.7-67.7-62.2 C315.4 29.6 285.8 22 256 22S196.6 29.6 169.5 44.1C142.4 58.7 114.6 80 90.5 107.7C66.6 135.3 47.1 169.9 32.5 209.2 c-14.7 40.1-23.5 85.2-25.9 131.8c-0.3 4.5 2.1 9 6.7 9c0.8 0 1.6-0.1 2.4-0.4c24.8-7.6 50.4-11.6 76.8-11.6c26.4 0 52 4 76.8 11.6 c0.8 0.2 1.7 0.4 2.5 0.4c4.5 0 7-4.5 6.5-9.1c-2.4-46.6-11.2-91.6-25.9-131.8C171.4 169.9 151.9 135.3 128 107.7 C104.4 81.1 77.5 61.1 48 49.9C48.6 45.5 46.1 41 41.5 41c-4.4 0-7.1 4.4-6.5 9.1c2.4 44.7 11.5 89.8 25.6 128.6 c14.1 38.9 33.5 73.7 57.1 103.5c23.9 31 53 55.6 85.4 71.6c34.7 16.2 72.4 23.7 110.6 23.7s75.9-7.5 110.6-23.7 c32.4-16 61.5-40.6 85.4-71.6c23.6-29.8 43-64.6 57.1-103.5c14.1-38.8 23.2-83.9 25.6-128.6C535.1 45.4 532.4 41 528 41 c-4.6 0-6.9 4.5-6.5 9.9c1.1 16.6 1.7 33.5 1.7 50.1C523.2 228.7 528 272.7 528 320z");
    } else {
        passwordInput.type = "password";
        path.setAttribute("d", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z");
    }
}

document.getElementById("password").addEventListener("input", function() {
    // Show the eye icon
    document.querySelector(".toggle-password").style.visibility = "visible";
});

document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordInput = document.getElementById("password");
    const path = document.querySelector(".toggle-password path");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        path.setAttribute("d", "M528 320c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 5.5 0.7 10.9 2 16c-12.2 20.5-27.6 39.3-46.3 55.1c-18.6 15.7-40.3 28.3-63.7 36.9c-23.4 8.6-48.1 13-74.4 13s-51-4.4-74.4-13c-23.4-8.6-45.1-21.2-63.7-36.9c-18.6-15.7-34-34.6-46.3-55.1 c1.3-5.1 2-10.5 2-16c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 59.5 30.8 111.8 77.5 142.3c-15.3 19.6-27.5 41.8-36.3 65.7C54 456.1 45.5 477.1 42 499.9C41.4 504.5 43.9 509 48.5 509c0.8 0 1.6-0.1 2.4-0.4c25.6-7.8 51.8-12 79.1-12c27.3 0 53.5 4.2 79.1 12 c0.8 0.2 1.7 0.4 2.5 0.4c4.5 0 7-4.5 6.5-9.1c-2.4-46.6-11.2-91.6-25.9-131.8C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z");
    } else {
        passwordInput.type = "password";
        path.setAttribute("d", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z");
    }
});





  

  
