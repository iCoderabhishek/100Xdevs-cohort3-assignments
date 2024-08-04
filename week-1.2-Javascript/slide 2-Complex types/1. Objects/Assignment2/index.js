// Write a function that takes a new object as input which has name , age  and gender 
// and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetUser(user) {
    const { name, age, gender } = user
    let prefix;
    if (gender === "male") {
        prefix = "Mr.";
    } else if (gender === "female") {
        prefix = "Mrs.";
    } else {
        prefix = "Others";
    }

    const message = `Hi ${prefix} ${name}, your age is ${age}.`;

    // Print the greeting message
    console.log(message);
}
const Me = {name: "Abhishek", age: 20, gender: "male"}

greetUser(Me)
//Hi Mr. Abhishek, your age is 20.
