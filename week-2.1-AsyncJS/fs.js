//fs

const fs = require('fs');

// Read the contents of 'a.txt' asynchronously
fs.readFile('a.txt', 'utf8', (err, data) => {
  console.log('File contents:', data);
});
