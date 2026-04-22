// NOT tail call: still need to add n after sum returns
function sum(n) {
       if (n == 0) {
              return 0;
       } else {
              return n + sum(n - 1); //3+2+1+0
       }
}
/*
sum(3) = 3 + sum(2)              ← 3 is waiting
       = 3 + (2 + sum(1))        ← 3 AND 2 are waiting
       = 3 + (2 + (1 + sum(0)))  ← 3, 2, AND 1 are waiting
       = 3 + (2 + (1 + 0))       ← NOW we start adding
       = 6
*/

// Tail call: nothing left to do after sum returns
function sum(n, result) {
       if (n == 0) {
              return result;
       } else {
              return sum(n - 1, result + n);
       }
}
/*
sum(3, 0) → result is 0, now add 3
sum(2, 3) → result is 3, now add 2
sum(1, 5) → result is 5, now add 1
sum(0, 6) → n is 0, return result = 6
*/