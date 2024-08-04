//Write a function called sum that finds the sum from 1 to a number

function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(sum(100)) //5050