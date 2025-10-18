function orderVeg(vegetableArray) {
  const vegetableCopy = [...vegetableArray];
  vegetableCopy.sort((a, b) => a.quantity - b.quantity)



  return vegetableCopy;
}

module.exports = orderVeg;
