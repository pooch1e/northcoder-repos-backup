function getOrderInfo(customer) {
  // const copyCustomer = {
  //   userID: `${customer.userID}`,
  //   shippingAddress: `${customer.userID}`,
  //   orderId: `${customer.userID}`,
  // };

  // trying destructuring
  const { orderId, shippingAddress, userId } = customer;
  const copy = { orderId, shippingAddress, userId };

  return copy;
}

module.exports = getOrderInfo;
