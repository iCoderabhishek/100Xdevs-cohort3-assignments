// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function newFunc (arr) {
    return arr.filter(evenNumbers)
}
function evenNumbers(num){
    return num % 2 === 0;
}

const arr = [101, 10, 2, 8, 16, 8]

console.log(newFunc(arr))