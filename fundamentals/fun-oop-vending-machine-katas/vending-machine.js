class VendingMachine {
  constructor(credit = 0) {
    this.credit = credit;
    this.stock = { A: {}, B: {}, C: {} };
    this.validPosition = ['A', 'B', 'C'];
  }

  addItem(item, position) {
    // let upperCase = position.toUpperCase();
    if (this.isValidPosition(position)) {
      this.stock[position] = item;
    }
  }
  addCredit(money) {
    return money > 0 ? (this.credit += money) : 'Invalid amount';
  }
  purchaseItem(position) {
    if (!this.isValidPosition(position)) {
      return 'Invalid selection';
    } else if (this.credit < this.stock[position].price) {
      return 'Insufficient credit';
    } else if (
      this.stock[position].quantity === 0 ||
      Object.entries(this.stock[position]).length === 0
    ) {
      return 'Item is out of stock';
    } else {
      this.stock[position].quantity--;
      this.credit -= this.stock[position].price;
      return this.stock[position].name;
    }
  }
  restockItem(position, quantity) {
    if (!this.isValidPosition(position)) {
      return 'Invalid selection';
    } else if (this.stock[position].quantity === undefined) {
      return 'No item to restock at this position.';
    } else if (quantity < 0) {
      return 'Invalid quantity';
    } else {
      this.stock[position].quantity += quantity;
      return `Restocked ${this.stock[position].name}, new quantity: ${this.stock[position].quantity}`;
    }
  }

  isValidPosition(position) {
    return this.validPosition.includes(position) ? true : false;
  }

  getItemPosition(itemName) {
    for (const item in this.stock) {
      return this.stock[item].name === itemName ? item : undefined;
    }
  }
}

module.exports = VendingMachine;
