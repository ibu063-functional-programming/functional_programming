// ************ TASK DESCRIPTION ************

// Analyze the given function to determine whether it is pure. 
// If it is impure, refactor it into a pure function.
// If it is already pure, retain its original form.
// In either case you will need to create the function under the "TODO" comment

/*
* let cart = [
*    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
*    { id: 2, name: "Phone", price: 500, quantity: 2 }
* ];
*
* let discpuntPercentage = 15;
*
* function applyDiscountAndUpdateCart(cart, discountPercentage) {
*     for (let item of cart) {
*        item.price -= item.price * (discountPercentage / 100);
*     }
* }
*
*/



// TODO (if needed)
const applyDiscountAndUpdateCart = (cart, discountPercentage) => {
    let newCart = []; 
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]; 
        let newItem = {
            id: item.id,
            name: item.name,
            price: item.price * (1 - discountPercentage / 100), 
            quantity: item.quantity
        };
        newCart.push(newItem); 
    }
    return newCart; 
};
















// Below this comment any modification is prohibited. 
module.exports = applyDiscountAndUpdateCart;