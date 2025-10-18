const { processItemRequest } = require('../task-1/process-item-request');
const { priceCheck } = require('../utils/ingredientsUtils');

async function createBulkOrder(items) {
  try {
    if (items.length === 0) {
      return { itemsOrdered: items, totalCost: 0 };
    }

    const arrayOfItems = await Promise.all(
      items.map((item) => processItemRequest(item))
    );
    console.log(arrayOfItems);

    return { itemName: arrayOfItems, totalCost: totalCost };
  } catch (err) {
    return { msg: 'Order could not be completed: item or ingredient missing' };
  }
}

module.exports = { createBulkOrder };
