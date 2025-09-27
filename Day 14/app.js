const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3070;

// Set up Handlebars
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// GET route to display the calculator form
app.get('/calc', (req, res) => {
    res.render('calc.hbs');
});

// POST route to handle the calculation
app.post('/docalculation', (req, res) => {
    // Retrieve the numbers from the form submission
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    
    // Perform the calculation
    const sum = num1 + num2;
    
    // Render the same 'calc' template, but this time pass the 'result'
    res.render('calc', { result: sum });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/calc`);
});