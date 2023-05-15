export function formatDate(dateString) {
  // Extract the year component from the input string
  let year = dateString.slice(0, 4);

  // Extract the month component from the input string
  let month = dateString.slice(5, 7);

  // Extract the day component from the input string
  let day = dateString.slice(8, 10);

  // Combine the day, month, and year components into the desired format
  let formattedDate = `${day}-${month}-${year}`;

  // Return the formatted date string
  return formattedDate;
}
