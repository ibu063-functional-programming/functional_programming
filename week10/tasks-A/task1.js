// ************ TASK DESCRIPTION ************
//? Façade Pattern

/*
*   You are working with a legacy payment processor that requires transaction data in a strict format:
        legacyProcess(amount, currency, accountId)


*   Implement a façade function `processTransaction(cleanData)` that prepares data
*   in a unified format for use with the legacy `legacyProcess` function.

*   Your function must prepare the data for the legacy format.

*    Example input:
*    processTransaction({
*      id: "acc123",
*      payment: { value: 150, unit: "USD" }
*    });
*    
*    Expected effect:
*    **Calls legacyProcess(150, "USD", "acc123")

*/

// TODO: Implement processTransaction




function processTransaction(cleanData) {
  console.log("Processing clean input:", cleanData);

  const amount = cleanData.payment.value;
  const currency = cleanData.payment.unit;
  const accountId = cleanData.id;

  console.log(`Calling legacyProcess(${amount}, "${currency}", "${accountId}")`);
  legacyProcess(amount, currency, accountId);
}















// Below this comment any modification is prohibited.
module.exports = { processTransaction };
