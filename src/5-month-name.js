const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if(monthNumber < 1 || monthNumber > 12) {
    return null
  }
  return months[monthNumber - 1] 

  // if (monthNumber[0]) {
  //   return months[monthNumber]
  // } else if (monthNumber[1]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[2]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[3]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[4]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[5]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[6]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[7]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[8]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[9]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[10]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[11]) {
  //   return months[monthNumber] 
  // } else if (monthNumber[12]) {
    

  // months.forEach 
  // return months[monthNumber]
  // if (monthNumber[0]) {}
  // return months[monthNumber]
}

