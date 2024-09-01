// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it.

const express = require('express');
const app = express();

let totalRequests = 0; // keep track of total requests

// Middleware function
app.use((req, res, next) => {
    totalRequests++; // increment total requests
    next(); // call next middleware
});


app.get('/', (req, res) =>{
    res.send('Hello My Server!');
})
// Endpoint to expose total requests
app.get('/totalRequests', (req, res) => {
    res.send(totalRequests);
});

// Start server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

//find bug