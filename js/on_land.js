async function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user credentials from local storage
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    // Prepare user data for sending to the server
    const userData = { username, email, password };

    try {
        // Send a POST request to the Netlify serverless function
        const response = await fetch('/.netlify/functions/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // Parse the JSON response
        const result = await response.json();

        if (response.ok) {
            // Successful login, redirect to the main page
            console.log(result.message);
            window.open("main.html", "_parent"); // Or navigate to your main page
        } else {
            // Access denied, log the message and redirect to login page
            console.log(result.message);
            openPopup(); // Show your error popup here
            setTimeout(() => window.open("login.html", "_parent"), 2000); // Redirect after a delay
        }
    } catch (error) {
        // Handle network errors or other unexpected issues
        console.error("Error during login:", error);
        openPopup(); // Show error popup for unexpected errors
        setTimeout(() => window.open("login.html", "_parent"), 2000); // Redirect after a delay
    }
}

