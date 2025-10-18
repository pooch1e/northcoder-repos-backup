const VendingMachine = require('../vending-machine.js');
//UP TOP DISCLAIMER - Coca Cola is on the BDS boycots list and should be avoided - I've used as test cases only
describe('Vending Machine', () => {
  describe('objects instantiate with correct properties', () => {
    test('instances of class have the correct constructor properties', () => {
      const defaultStock = { A: {}, B: {}, C: {} };
      const newTestMachine = new VendingMachine('0');
      expect(newTestMachine).toHaveProperty('credit');
      expect(newTestMachine.stock).toEqual(defaultStock);
    });
    test('instance has default credit property of 0', () => {
      const newTestMachine = new VendingMachine();
      expect(newTestMachine.credit).toBe(0);
    });
  });
  describe('methods', () => {
    describe('testing addStock method', () => {
      test('when passing item to position, item should appear under correct row in stock', () => {
        const dietCoke = { name: 'Diet Coke', price: 75, quantity: 6 };
        const newTestMachine = new VendingMachine();
        newTestMachine.addItem(dietCoke, 'A');
        expect(newTestMachine.stock['A']).toEqual(dietCoke);
      });
      test('when passing item, only the identified row should be changed', () => {
        const coke = { name: 'Coke', price: 85, quantity: 6 };
        const newTestMachine = new VendingMachine();
        newTestMachine.addItem(coke, 'B');
        expect(newTestMachine.stock['A']).toEqual({});
        expect(newTestMachine.stock['B']).toEqual(coke);
      });
      test('if item has invalid position, will not add to stock', () => {
        const fanta = { name: 'Fanta', price: 85, quantity: 6 };
        const stock = { A: {}, B: {}, C: {} };
        const newTestMachine = new VendingMachine();
        newTestMachine.addItem(fanta, 'F');
        expect(newTestMachine.stock).toEqual(stock);
      });
    });
    describe('testing addCredit method', () => {
      test('should increase value of credit property by input amount', () => {
        const newTestMachine = new VendingMachine();
        const cash = 50;
        newTestMachine.addCredit(cash);
        expect(newTestMachine.credit).toBe(50);
      });
      test('credit should increase each time method is invoked', () => {
        const newTestMachine = new VendingMachine();
        const cash = 50;
        const coins = 20;
        newTestMachine.addCredit(cash);
        newTestMachine.addCredit(coins);
        newTestMachine.addCredit(100);
        expect(newTestMachine.credit).toBe(170);
      });
      test('should only pass positive numbers', () => {
        const newTestMachine = new VendingMachine();
        const cash = 50;
        const cheater = -20;
        newTestMachine.addCredit(cash);
        newTestMachine.addCredit(cheater);
        expect(newTestMachine.credit).toBe(50);
      });
      test('if input is not valid, should not change credit and should return string of "Invalid amount"', () => {
        const newTestMachine = new VendingMachine();
        const cheater = -20;
        const addInvalidAmount = newTestMachine.addCredit(cheater);
        expect(newTestMachine.credit).toBe(0);
        expect(typeof addInvalidAmount).toBe('string');
      });
    });
    describe('testing purchaseItem method', () => {
      test('if there is enough credit, reduce correct item quantity by 1', () => {
        const testVendingMachine = new VendingMachine(500);
        const dietCoke = { name: 'Diet Coke', price: 75, quantity: 6 };
        testVendingMachine.addItem(dietCoke, 'A');
        testVendingMachine.purchaseItem('A');
        expect(testVendingMachine.stock['A'].quantity).toBe(5);
      });
      test('if there is enough credit, deduct item price from credit', () => {
        const cokeVendingMachine = new VendingMachine(100);
        const coke = { name: 'Coke', price: 50, quantity: 4 };
        cokeVendingMachine.addItem(coke, 'B');
        cokeVendingMachine.purchaseItem('B');
        expect(cokeVendingMachine.credit).toBe(50);
      });
      test('returns item name if purchased succesfully', () => {
        const noCokeVendingMachine = new VendingMachine(100);
        const pepsi = { name: 'Pepsi', price: 50, quantity: 4 };
        noCokeVendingMachine.addItem(pepsi, 'C');
        const returnedItem = noCokeVendingMachine.purchaseItem('C');
        console.log(returnedItem);
        expect(typeof returnedItem).toBe('string');
        expect(returnedItem).toBe('Pepsi');
      });
      test('if there is not enough credit, return string "Insufficient credit"', () => {
        const pepsiVendingMachine = new VendingMachine();
        const pepsi = { name: 'Pepsi', price: 50, quantity: 4 };
        pepsiVendingMachine.addItem(pepsi, 'B');
        const returnedItem = pepsiVendingMachine.purchaseItem('B');
        console.log(returnedItem);
        expect(returnedItem).toBe('Insufficient credit');
        expect(typeof returnedItem).toBe('string');
      });
      test('if item is out of stock return "Item is out of stock"', () => {
        const pepsiVendingMachine = new VendingMachine(100);
        const noPepsi = { name: 'Pepsi', price: 50, quantity: 0 };
        pepsiVendingMachine.addItem(noPepsi, 'A');
        const returnedItem = pepsiVendingMachine.purchaseItem('A');
        console.log(returnedItem, '<< no quantity');
        expect(returnedItem).toBe('Item is out of stock');
        expect(typeof returnedItem).toBe('string');
      });
      test('if item row is empty return "Item is out of stock"', () => {
        const pepsiVendingMachine = new VendingMachine(100);
        const noPepsi = { name: 'Pepsi', price: 50, quantity: 3 };
        pepsiVendingMachine.addItem(noPepsi, 'B');
        const returnedItem = pepsiVendingMachine.purchaseItem('A');
        console.log(returnedItem, '<< none in row');
        expect(returnedItem).toBe('Item is out of stock');
        expect(typeof returnedItem).toBe('string');
      });
      test('if position is invalid, return "Invalid Selection"', () => {
        const pepsiVendingMachine = new VendingMachine(100);
        const noPepsi = { name: 'Pepsi', price: 50, quantity: 3 };
        pepsiVendingMachine.addItem(noPepsi, 'B');
        const returnedItem = pepsiVendingMachine.purchaseItem('F');
        console.log(returnedItem, '<< incorrect selection');
        expect(returnedItem).toBe('Invalid selection');
        expect(typeof returnedItem).toBe('string');
      });
    });
    describe('testing restockItem method', () => {
      test('when passing item to method, confirms position is valid otherwise returns "No item to restock at this position.', () => {
        const lycheeVendingMachine = new VendingMachine();
        const lychee = { name: 'Lychee', price: 75, quantity: 2 };
        lycheeVendingMachine.addItem(lychee, 'B');
        const stockUp = lycheeVendingMachine.restockItem('A', 5);
        console.log(stockUp);
        expect(stockUp).toBe('No item to restock at this position.');
        expect(typeof stockUp).toBe('string');
      });
      test('quantity must be a valid positive number', () => {
        const lycheeVendingMachine = new VendingMachine();
        const lychee = { name: 'Lychee', price: 75, quantity: 2 };
        lycheeVendingMachine.addItem(lychee, 'B');
        const stockUp = lycheeVendingMachine.restockItem('B', -4);
        console.log(stockUp);
        expect(stockUp).toBe('Invalid quantity');
        expect(typeof stockUp).toBe('string');
      });
      test('increases item quantity if item is already in row', () => {
        const lycheeVendingMachine = new VendingMachine();
        const lychee = { name: 'Lychee', price: 75, quantity: 2 };
        lycheeVendingMachine.addItem(lychee, 'B');
        lycheeVendingMachine.restockItem('B', 4);
        expect(lycheeVendingMachine.stock['B'].quantity).toBe(6);
      });
      test('returns confirmation string when stock is restocked', () => {
        const lycheeVendingMachine = new VendingMachine();
        const lychee = { name: 'Lychee', price: 75, quantity: 2 };
        lycheeVendingMachine.addItem(lychee, 'A');
        const stockUp = lycheeVendingMachine.restockItem('A', 5);
        console.log(stockUp);
        expect(stockUp).toBe('Restocked Lychee, new quantity: 7');
        expect(typeof stockUp).toBe('string');
      });
    });
  });
  describe('helper methods', () => {
    describe('isValidPosition method', () => {
      test('returns true if valid position', () => {
        const myNewMachine = new VendingMachine();
        expect(myNewMachine.isValidPosition('A')).toBe(true);
        expect(myNewMachine.isValidPosition('B')).toBe(true);
        expect(myNewMachine.isValidPosition('C')).toBe(true);
        expect(myNewMachine.isValidPosition('D')).toBe(false);
        expect(myNewMachine.isValidPosition('E')).toBe(false);
      });
      test('returns false for invalid position', () => {
        const myNewMachine = new VendingMachine();
        expect(myNewMachine.isValidPosition('Z')).toBe(false);
        expect(myNewMachine.isValidPosition('X')).toBe(false);
        expect(myNewMachine.isValidPosition('Y')).toBe(false);
        expect(myNewMachine.isValidPosition('A')).toBe(true);
        expect(myNewMachine.isValidPosition('C')).toBe(true);
      });
      describe('getItemPosition method', () => {
        test('returns item stored at given position', () => {
          const myNewMachine = new VendingMachine();
          const testItem = { name: 'hotdog', price: 10, quantity: 1 };
          myNewMachine.addItem(testItem, 'A');
          expect(myNewMachine.getItemPosition('hotdog')).toBe('A');
        });
      });
    });
  });
});
