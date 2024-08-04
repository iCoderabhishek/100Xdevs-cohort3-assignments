// Write a function that takes a user as an input and greets them with their name and age

function greetUser(user) {
    console.log(`Hey, ${user.name}! You are ${user.age} years old.`);
}

// Example usage:
const user = {
    name: "You",
    age: 0
};

greetUser(user); // Output: Hey, You! You are 0 years old.
