const serviceResult = {
    accountsData: [
        { id: "F220960K", balance: 1024 },
        { id: "S120456T", balance: 2260 },
        { id: "J140793A", balance: -38 },
        { id: "M120396V", balance: -114 },
        { id: "A120289L", balance: 55000 },
    ],
};

const delinquent = serviceResult.accountsData.filter((v) => v.balance < 0);

console.log(delinquent);
// Output: [ { id: 'J140793A', balance: -38 }, { id: 'M120396V', balance: -114 } ]

const delinquentIds = delinquent.map((v) => v.id);

console.log(delinquentIds);
// Output: [ 'J140793A', 'M120396V' ]

const delinquentIds2 = serviceResult.accountsData
    .filter((v) => v.balance < 0) // Filter accounts with negative balance
    .map((v) => v.id); // Extract their IDs

console.log(delinquentIds2);
// Output: [ 'J140793A', 'M120396V' ]