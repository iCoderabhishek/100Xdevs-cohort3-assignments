//  Create a middleware function 
//that logs each incoming request’s 
// -HTTP method, 
// -URL, and 
// -timestamp to the console

const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url} ${new Date().toISOString()}`); // log the request + timestamp + method + url
    next(); // calls the next middleware
});

//req.method - GET
//req.url - /hello
//new Date().toISOString() - 2020-07-01T10:00:00.000Z


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  