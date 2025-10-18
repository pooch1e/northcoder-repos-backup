function getCentury(year) {
  
  let yearAsCentury = Math.ceil(year/100);
  
  if (yearAsCentury === 1) {
    return yearAsCentury.toString() + 'st'
  } else if (yearAsCentury === 2) {
    return yearAsCentury.toString() + 'nd'
  } else if (yearAsCentury === 3) {
    return yearAsCentury.toString() + 'rd'
  } else if (yearAsCentury >= 4 && yearAsCentury <= 20) {
    return yearAsCentury.toString() + 'th'
  } else {
    return yearAsCentury.toString() + 'st';
  }


}

module.exports = getCentury;

// Converts a given year to the century that year was in.
// Arguments

//     year (number): The number to convert.

// Returns

//     century (string): The century conversion.

// Examples

// getCentury(1999)
// // => "20th"

// getCentury(2004)
// // => "21st"

// getCentury(1877)
// // => "19th"