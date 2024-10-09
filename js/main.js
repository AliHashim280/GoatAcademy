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


function openPopup() {
    document.querySelector('.popup-container').style.display = 'block';
    document.querySelector('.blur-overlay').style.display = 'block';
}



function openlogin() {
    window.location.href = 'login.html';
}



// Function to check user credentials
function checkUserCredentials() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // If any of the credentials are missing, redirect to the login page
    if (!storedUsername || !storedEmail || !storedPassword) {
        openPopup()
        // Wait for 2 seconds before checking credentials
        setTimeout(() => {
            openlogin();
        }, 2000);

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

        openPopup()
        // Wait for 2 seconds before checking credentials
        setTimeout(() => {
            openlogin();
        }, 2000);

    }
    else {
        return;
    }
}


window.onload = checkUserCredentials


const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    const isOpen = sidebar.style.left === '0px';

    // Toggle sidebar visibility
    sidebar.style.left = isOpen ? '-250px' : '0px';

    // Change the hamburger icon based on sidebar state
    if (isOpen) {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Show bars icon
    } else {
        hamburger.innerHTML = '<i class="fas fa-times"></i>'; // Show close (X) icon
    }
});