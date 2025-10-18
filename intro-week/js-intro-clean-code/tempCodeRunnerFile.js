function averageNestedNumbers(array) { // multi dimensional array of numbers as strings
//   let sumAllNumbers = 0; // sumAllNumberss all numbers in array
//   let numCount = 0;
//    // counts how many numbers in array
//   for (let i = 0; i < array.length; i++) {
//      // loops through array of arrays
//      let row = array[i];
//     for (let j = 0; j < row.length; j++) { // loops through each nested array

//       // test to see if there are any digits at location array[i[j]]
//       numCount = /\d/.test(array[i][j]) ? numCount + 1 : numCount; // num increments every time it identifies a digit?
//       // if this location of the array is a number then return number + 1 OR return number;

//       sumAllNumbers = /\d/.test(array[i][j]) ? sumAllNumbers + Number(array[i][j]) : sumAllNumbers;
//     } 
//   }

//   return sumAllNumbers / numCount;

// }