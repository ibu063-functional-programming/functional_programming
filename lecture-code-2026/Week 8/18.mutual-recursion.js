function isEven(n) {
  if (n === 0) {
    return true;
  } else {
    return isOdd(n - 1);
  }
}

function isOdd(n) {
  return !isEven(n);
}

console.log("22... isEven?", isEven(22)); // true
console.log("5.... isOdd?", isOdd(5));   // true
console.log("10... isOdd?", isOdd(10));  // false

/*
isOdd(6) false
!isEven(6) !true = false
--------------------------
isOdd(5) true
!isEven(5) !false = true
isOdd(4) false 
!isEven(4) !true = false
isOdd(3) true
!isEven(3) !false = true
isOdd(2) false
!isEven(2) !true = false
isOdd(1) = true
!isEven(1) !false = true
isOdd(0) = false
!isEven(0) !true = false
isEven(0) = true
*/