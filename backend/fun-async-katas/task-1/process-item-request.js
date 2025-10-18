const { findIngredients } = require('../utils/ingredientsUtils');

async function processItemRequest(item) {
  try {
    const foundIngredients = await findIngredients(item);

    const itemNameObject = { itemName: item, ingredients: foundIngredients };

    return itemNameObject;
  } catch (err) {
    return { msg: `${item} not found` };
  }
}

module.exports = { processItemRequest };
