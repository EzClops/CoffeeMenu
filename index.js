// Import the coffee_data.js file using the require syntax
const coffeeMenu = require("./coffee_data.js");



// Print an array of all the drinks on the menu
let drinks = coffeeMenu.map(drink => {
    return drink.name;});
console.log("1. Drinks on the menu: ", drinks, "\n");

// Print an array of drinks that cost 5 and under
let drinksUnder5 = coffeeMenu.filter(drink =>{
    if (drink.price <= 5){return drink}
}).map(drink =>{
    return drink.name;
});
console.log("2. Drinks that cost 5 and under: ",drinksUnder5, "\n");

// Print an array of drinks that are priced at an even number
let drinksEven = coffeeMenu.filter(drink =>{
    if(drink.price % 2 === 0){return drink}
}).map(drink =>{
    return drink.name;
});
console.log("3. Drinks that are priced at an even number: ", drinksEven, "\n");

// Print the total if you were to order one of every drink
let drinksTotal = coffeeMenu.reduce((total, drink) =>{
    return total + drink.price;
},0);
console.log("4. Total of every drink: ", drinksTotal, "\n");

// Print an array with all the drinks that are seasonal
let drinksSeasonal = coffeeMenu.filter(drink =>{
    if(drink.seasonal === true){return drink}
}).map(drink =>{
    return drink.name;
});
console.log("5. Seasonal drinks: ", drinksSeasonal, "\n");

// Print the seasonal drinks with the words "with imported beans" after the item name
let seasonalBeans = drinksSeasonal.map(drink =>{
    return `${drink} with imported beans`;
});
console.log("6. Seasonal drinks: ", seasonalBeans, "\n");