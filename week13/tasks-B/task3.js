// ************ TASK DESCRIPTION ************
//? Task 3: Refactor Invoice Summary Printer

/*
* You are working on an invoicing system for a freelance platform.
* The current implementation is in the function generateInvoiceSummary which you can analyze below.
*
* Your task:
* - Make the function pure.
* - Implement helper functions if needed
*
* You may assume `jobs` is an array of objects, where each job has:
* { description: string, hours: number, rate: number }
*
* Example output:
* generateInvoiceSummary(jobs, 0.2) → returns a number like 186.00
*
*/


function generateInvoiceSummary(jobs, tax) {
    const subtotal = jobs.reduce((sum, job) => {
      return sum + job.hours * job.rate;
    }, 0);

    const total = subtotal + subtotal * tax;
    return parseFloat(total.toFixed(2));
}




// Below this comment any modification is prohibited.
module.exports = { generateInvoiceSummary };