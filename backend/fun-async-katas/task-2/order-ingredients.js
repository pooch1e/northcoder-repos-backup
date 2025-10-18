const { processItemRequest } = require('../task-1/process-item-request');
const { priceCheck } = require('../utils/ingredientsUtils');

async function orderIngredients(item) {
  try {
    const ingredientsObject = await processItemRequest(item);
    const prices = ingredientsObject.ingredients.map((ingredient) => {
      return priceCheck(ingredient);
    });
    const cost = await Promise.all(prices);

    const totalCost = cost.reduce((item, currentValue) => {
      return (item += currentValue.cost);
    }, 0);

    return { ingredientsObject, totalCost: totalCost };
  } catch (err) {
    return { msg: 'could not find one or more ingredients' };
  }
}

module.exports = { orderIngredients };
