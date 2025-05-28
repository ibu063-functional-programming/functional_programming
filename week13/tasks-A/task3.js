// ************ TASK DESCRIPTION ************
//? Task 3: Refactor Shopping Cart Price Calculator

/*
* You are working on a shopping cart system.
* The current implementation is in the function calculateTotal which you can analyze below.
*
* Your task:
* - Make the function pure
* - Implement helper functions if needed
* 
* You may assume cart is list of item objects. Every item has: { name: string, price: number, quantity: number }
* 
* Example output:
* calculateTotal(cart, 0.2) → returns a number like 66.00
*/



function calculateTotal(cart, taxRate) {
  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const totalWithTax = subtotal + subtotal * taxRate;
  return parseFloat(totalWithTax.toFixed(2));
}







// Below this comment any modification is prohibited.
module.exports = { calculateTotal };