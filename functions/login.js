const users = {
    "alicodes019@gmail.com": { username: "Ali", password: "12345678" },
    "gbhatti.g1959@gmail.com": { username: "Hashim", password: "MY-Firstcourse001" },
};

export async function handler(event, context) {
    const body = JSON.parse(event.body);
    const { email, username, password } = body;

    // Check if the user exists
    const user = users[email];
    if (user && user.username === username && user.password === password) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Login successful!" }),
        };
    } else {
        return {
            statusCode: 403,
            body: JSON.stringify({ message: "Access denied!" }),
        };
    }
}
