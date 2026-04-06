const serviceResult = {
    accountsData: [
        { id: "F220960K", balance: 1024 },
        { id: "S120456T", balance: 2260 },
        { id: "J140793A", balance: -38 },
        { id: "M120396V", balance: -114 },
        { id: "A120289L", balance: 55000 },
    ],
};

const delinquent = serviceResult.accountsData.filter(
 (v) => v.balance < 0
);

const notDelinquent = serviceResult.accountsData.filter(
 (v) => v.balance >= 0
);

const notDelinquent2 = serviceResult.accountsData.filter(
 (v) => !(v.balance < 0)
);

const isNegativeBalance = (v) => v.balance < 0;
const not = (fn) => 
    (...args) => !fn(...args);
const notDelinquent3 = serviceResult.accountsData.filter(
 not(isNegativeBalance)
);
//[1, 2, -3, 4, -5].filter(((x) => x < 0));

//[1, 2, 4]
console.log(notDelinquent3);