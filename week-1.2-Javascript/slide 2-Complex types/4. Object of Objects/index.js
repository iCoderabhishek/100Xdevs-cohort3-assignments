// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function filterMaleUsers(users) {
  return users.filter((user) => user.age > 18 && user.gender === "male");
}

const users = [
  { name: "Harkirat", age: 31, gender: "male" },
  { name: "Abhishek", age: 20, gender: "male" },
  { name: "Puja", age: 19, gender: "female" },
  { name: "Kirat", age: 61, gender: "male" },
  { name: "Maya", age: 21, gender: "female" },
];

const filteredUsers = filterMaleUsers(users);
console.log(filteredUsers);
