//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old.

function filterPeople(users) {
  return users.filter(filterLoop);
}

function filterLoop(user) {
  return user.age > 18;
}

const users = [
  {
    name: "Harkirat",
    age: 31,
  },
  {
    name: "Abhishek",
    age: 20,
  },
  {
    name: "Riya",
    age: 17,
  },
];

const filteredUsers = filterPeople(users);
console.log(filteredUsers);
// Output: [ { name: 'Harkirat', age: 31 }, { name: 'Abhishek', age: 20 } ]
