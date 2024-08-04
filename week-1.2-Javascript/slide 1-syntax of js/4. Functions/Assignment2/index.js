//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  if (age < 18) {
    return false;
  } else return true;
}

console.log(canVote(7)) //false