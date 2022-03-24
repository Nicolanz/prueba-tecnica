#!/usr/bin/env node

// divisors function
function divisors (num){
    if (Number.isInteger(num) === false){
        return `${num} debe ser entero`;
    } else if (num <= 1){
        return `${num} debe ser mayor a 1`;
    }

    const arr = [];

    for (let i = 2; i < num; i++){
        if (num % i === 0){
            arr.push(i);
        }
    }
    if (arr.length === 0){
        return `${num} es primo`;
    }
    return arr;
}

// Tests
console.log(divisors(12.3));
console.log(divisors(1));
console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
