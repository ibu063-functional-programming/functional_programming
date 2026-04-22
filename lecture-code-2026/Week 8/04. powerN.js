const powerN = (base, power) => {
  if (power === 0) {
    return 1;
  } else if (power % 2) {
    // odd power
    return base * powerN(base, power - 1);
  } else {
    // even power
    return powerN(base * base, power / 2);
  }
};
/*
powerN(2, 13) = 2*2*2*2*2*2*2*2*2*2*2*2*2
= 2 times 2^12 
= 2 times 4^6    
= 2 times 16^3     
= 2 times 16 times 16^2 
= 2 times 16 times 256^1 
= 8192
*/

