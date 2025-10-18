function countVeg(vegetables, type) {
  let vegetableCount = 0;
  // filtering the array for the type
  const filtered = vegetables.filter((veg) => {
    // only return objects where veg type is === type
    return veg.type === type   
})

  console.log(filtered, 'This is the filtered array');
  // for loop to iterate over array and add quantity to variable 'count'
  for (let i = 0; i < filtered.length; i++) {
    
    let amount = filtered[i].quantity;
    console.log(amount);
    vegetableCount += amount;
  }
  
  console.log(vegetableCount, 'This is the total count of quantity veg');
  return vegetableCount;

}

module.exports = countVeg;
