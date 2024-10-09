// Function to handle user login
async function loginUser() {
     

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/.netlify/functions/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        const result = await response.json();

        if (response.ok) {
            // Successful login, redirect to the main page
            window.location.href = '/main.html';
        } else {
            // Access denied, redirect to access denied page
            console.error(result.message); // Log the message for debugging
            window.location.href = 'access_denied.html';
        }
    } catch (error) {
        console.error('Error during login:', error);
        // Optionally, you can redirect or show an error message here
    }
}

// Attach the event listener to the login form
document.getElementById('loginForm').addEventListener('submit', loginUser);

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