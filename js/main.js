
function openPopup() {
    document.querySelector('.popup-container').style.display = 'block';
    document.querySelector('.blur-overlay').style.display = 'block';
}



function openlogin() {
    window.location.href = 'login.html';
}


async function checkUserCredentials(event) {
    event.preventDefault(); // Prevent form submission

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    // Check if any credential is missing
    if (!username || !email || !password) {
        openPopup();
        // Wait for 2 seconds before redirecting to the login page
        setTimeout(() => {
            openlogin();
        }, 2000);
        return; // Exit the function if credentials are missing
    }

    // Send credentials to the serverless function for verification
    const response = await fetch('/.netlify/functions/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
        // Successful login, redirect to main page
        window.open("main.html", "_parent"); // Navigate to your main page
    } else {
        // Handle login failure
        console.log(result.message);
        openPopup();
        // Wait for 2 seconds before redirecting to the login page
        setTimeout(() => {
            openlogin();
        }, 2000);
    }
}

// Make sure to attach this function to your form submission
// Example: document.getElementById('yourFormId').addEventListener('submit', checkUserCredentials);


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