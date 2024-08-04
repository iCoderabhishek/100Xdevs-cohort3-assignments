function greetUser(user) {
    const { name, age, gender } = user;
    let prefix;

    if (gender === "male") {
        prefix = "Mr.";
    } else if (gender === "female") {
        prefix = "Mrs.";
    } else {
        prefix = "Other";
    }

    const msg = `Hi ${prefix} ${name}, your age is ${age}.`;

    console.log(msg);

    function canVote(age) {
        return age >= 18;
    }

    if (canVote(age)) {
        console.log("Yup...You are eligible to vote.");
    } else {
        console.log("NOOO....You are not eligible to vote.");
    }
}

// Create a user object and call greetUser
const Me = { name: "Abhishek", age: 20, gender: "male" };
greetUser(Me);
// Output:
// Hi Mr. Abhishek, your age is 20.
// You are eligible to vote.
