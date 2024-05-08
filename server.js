const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));



// Route for the root or homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Serve the login.html file
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'Prince' && password === 'smile') {
        res.redirect('/dashboard'); // Redirect to dashboard if login is successful
    } else {
        res.send('Invalid username or password. Please try again.'); // Display error message if login fails
    }
});

// Route to serve the dashboard page
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file from the current directory
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
