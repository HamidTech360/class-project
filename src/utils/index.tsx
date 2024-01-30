export function addDelimiterToNumber(number:any) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Use a regular expression to add commas as a delimiter
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return numberString;
}

export const trimString = (string:string)=>{
  return string.split(" ").slice(0, 4).join(" ")  
}

export const formatID  = (id:number)=>{
  let s__number = `00000${id}#`
  s__number = s__number.slice(-6)

  return s__number
}