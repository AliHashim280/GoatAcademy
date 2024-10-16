// Define authorized users directly in the script
const authorizedUsers = {
    "users": [

        {
            "username": "Ali",
            "email": "alicodes019@gmail.com",
            "password": "12345678"
        },
        {
            "username": "Hashim",
            "email": "gbhatti.g1959@gmail.com",
            "password": "MY-Firstcourse001"
        }
    ]
};

// Save authorized users to local storage for testing
localStorage.setItem('authorizedUsers', JSON.stringify(authorizedUsers));

// Function to check if the user exists
function checkUser() {
    // Get input values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Retrieve the users from local storage
    const users = JSON.parse(localStorage.getItem('authorizedUsers')).users;

    // Check if the user exists
    const user = users.find(user =>
        user.username === username &&
        user.email === email &&
        user.password === password
    );

    if (user) {
        // User exists, store credentials in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Redirect to Google
        window.open("main.html", "_parent");
    } else {
        // User does not exist, redirect to access denied page
        window.open("access_denied.html", "_parent");
    }
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        toggleIcon.classList.remove("fa-eye"); // Change icon to open eye
        toggleIcon.classList.add("fa-eye-slash"); // Change icon to closed eye
    } else {
        passwordInput.type = "password"; // Hide password
        toggleIcon.classList.remove("fa-eye-slash"); // Change icon to closed eye
        toggleIcon.classList.add("fa-eye"); // Change icon to open eye
    }
}



function toggleLabelClass(inputField, label) {
    if (inputField.value !== '' || document.activeElement === inputField) {
        label.classList.add('active-label');
    } else {
        label.classList.remove('active-label');
    }
    return;
}

// Function to add event listeners to input fields for toggling label class
function setupLabelToggle() {
    const inputs = document.querySelectorAll('.input-group input'); // Select all input fields

    inputs.forEach(input => {
        const label = input.nextElementSibling; // Get the corresponding label
        toggleLabelClass(input, label)
        // Add focus and blur event listeners
        input.addEventListener('focus', () => toggleLabelClass(input, label));
        input.addEventListener('blur', () => toggleLabelClass(input, label));
        input.addEventListener('input', () => toggleLabelClass(input, label)); // For handling input
    });
}


window.onload = setupLabelToggle;