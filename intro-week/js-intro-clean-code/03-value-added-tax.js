const { runTest, check } = require("./test-api");

function addVatToBill(bill) {
  const twentyPercent = bill * 0.2;
  const withVat = twentyPercent + bill;
  const asMoney = Number(withVat.toFixed(2))
  return asMoney;
  // + was turning the value back to a number and we then broke down teh expression nto variables describing whats happening
  // return +(bill * 1.2).toFixed(2);
}

runTest("addVatToBill", () => {
  check(addVatToBill(10)).isEqualTo(12);
  check(addVatToBill(15.99)).isEqualTo(19.19);
});
