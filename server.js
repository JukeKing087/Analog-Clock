const express = require('express');
const app = express();

// Set the view engine to use EJS
app.set('view engine', 'ejs');

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
