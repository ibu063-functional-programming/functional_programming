/*
You are given a shopping cart object. You need to write a function cartTotal that: 
Takes the cart object as a parameter
Calculates and returns the total price of all items
If the total is greater than 100, apply a 10% discount. 
const cart = {
  items: [
    { name: "Book", price: 25 },
    { name: "Headphones", price: 45 },
    { name: "Keyboard", price: 60 }
  ]
};
*/

function cartTotal(cart) {
    let total = 0;
    for (let item of cart.items) {
        total += item.price;
    }
    console.log("Total: " + total);
    if (total > 100) {
        total *= 0.9;
    }
    return `After discount: ${total}`;
}

const cart = {
  items: [
    { name: "Book", price: 25 },
    { name: "Headphones", price: 45 },
    { name: "Keyboard", price: 60 }
  ]
};

console.log(cartTotal(cart)); // 130 -> 117 after discount