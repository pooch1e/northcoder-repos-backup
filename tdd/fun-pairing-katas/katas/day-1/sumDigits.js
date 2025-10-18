function sumDigits(digit) {
  if (digit < 10) {
    return digit;
  } else if (typeof digit === "string") {
    const regex = /\d/g;
    const newArray = digit.match(regex);
    console.log(newArray);
    newArray.reduce((accumulator, element) => {
      accumulator + Number(element);
      return accumulator;
    }, 0);
    let TotalSum = 0;
    for (let i = 0; i < newArray.length; i++) {
      TotalSum += Number(newArray[i]);
    }
    return TotalSum;
  } else if (typeof digit === "number") {
    const regex = /\d/g;
    const newArray = digit.toString().match(regex);
    console.log(newArray);
    newArray.reduce((accumulator, element) => {
      accumulator + Number(element);
      return accumulator;
    }, 0);
    let TotalSum = 0;
    for (let i = 0; i < newArray.length; i++) {
      TotalSum += Number(newArray[i]);
    }
    return TotalSum;
  } else {
    const string = digit.toString();
    let sum = Number(string[0]) + Number(string[1]);
    return sum;
  }
}

module.exports = sumDigits;
