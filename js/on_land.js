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

// Function to check user credentials
function checkUserCredentials() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // If any of the credentials are missing, redirect to the login page
    if (!storedUsername || !storedEmail || !storedPassword) {
        window.location.href = 'login.html'; // Change to your actual login page
        return;
    }

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('authorizedUsers')).users;

    // Check against authorized users
    const user = users.find(user =>
        user.username === storedUsername &&
        user.email === storedEmail &&
        user.password === storedPassword
    );

    if (!user) {
        // If user does not match, add Google to history
        window.history.pushState({}, '', 'index.html');

        // Redirect to the login page
        window.location.href = 'login.html'; // Change to your actual login page
    }
    else {
        window.history.pushState({}, '', 'index.html');
        // User exists, proceed to the main application
        window.open("main.html", "_parent"); // Or navigate to your main page
    }
}

// Wait for 2 seconds before checking credentials
setTimeout(() => {
    checkUserCredentials();
}, 1000);
