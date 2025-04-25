// Simulating legacy date formatting function
function legacyFormat(dateObj) {
  return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
}

// Façade: clean and modern API
export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Expected a Date object");
  }

  const [day, month, year] = legacyFormat(date).split("-");
  const dd = day.padStart(2, "0");
  const mm = month.padStart(2, "0");

  return `${dd}-${mm}-${year}`; // Format: DD-MM-YYYY
};
