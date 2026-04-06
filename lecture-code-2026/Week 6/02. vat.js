const addVAT = (rate, amount) => amount * (1 + rate / 100);

addVAT(20, 500); // 600
addVAT(15, 200); // 230


const addVATcurried =
  (rate) =>
    (amount) =>
      amount * (1 + rate / 100);

const addNationalVAT = addVATcurried(6);
addNationalVAT(1500); // 1590
addNationalVAT(300); // 318

addVATcurried(10)(100); // 110