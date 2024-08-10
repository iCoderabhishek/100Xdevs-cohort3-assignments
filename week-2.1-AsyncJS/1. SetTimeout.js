// Create a promisify version of SetTimeout

const { promisify } = require('util');

const timeout = promisify(setTimeout);

// Using async/await
async function waitAndSayHello() {
  console.log("Waiting...");
  await timeout(2000);  // waits for 2 seconds
  console.log("Hello after 2 seconds!");
}

waitAndSayHello();