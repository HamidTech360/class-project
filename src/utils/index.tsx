export function addDelimiterToNumber(number:number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Use a regular expression to add commas as a delimiter
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return numberString;
  }