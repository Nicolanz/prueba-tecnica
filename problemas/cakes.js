#!/usr/bin/env node

// numOfCakes function
function cakes(recipe, available){
    if (recipe instanceof Object === false){
        return `${recipe} debe ser un objeto`;
    } else if (available instanceof Object === false){
        return `${available} debe ser un objeto`;
    }

    let arr = [];
    const recipes = Object.keys(recipe);

    for (let i in recipes){
        if (isNaN(available[recipes[i]]) || available[recipes[i]] < recipe[recipes[i]]){
            return 0;
        }
        arr.push(Math.round(available[recipes[i]] / recipe[recipes[i]]));
    }

    return Math.min(...arr);
}

// Tests
let recipe = {flour: 1200, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));


recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
console.log(cakes(recipe, available));
