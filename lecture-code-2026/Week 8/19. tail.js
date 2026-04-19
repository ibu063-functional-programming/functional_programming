// NOT tail call: still need to add n after sum returns
return n + sum(n - 1);

/*
sum(3) = 3 + sum(2)              ← 3 is waiting
       = 3 + (2 + sum(1))        ← 3 AND 2 are waiting
       = 3 + (2 + (1 + sum(0)))  ← 3, 2, AND 1 are waiting
       = 3 + (2 + (1 + 0))       ← NOW we start adding
       = 6
*/

// Tail call: nothing left to do after sum returns
return sum(n - 1, acc + n);

/*
sum(3, 0) → acc is 0, now add 3
sum(2, 3) → acc is 3, now add 2
sum(1, 5) → acc is 5, now add 1
sum(0, 6) → n is 0, return acc = 6
*/