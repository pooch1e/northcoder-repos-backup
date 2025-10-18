const stackProtoype = {
  addToStorage: function (item) {
    let lengthOfObject = Object.keys(this.storage).length;
    if (lengthOfObject === this.maxSize) {
      this.quantity = Object.keys(this.storage).length;
      this.storage;
    } else if (lengthOfObject === 0) {
      this.quantity = Object.keys(this.storage).length;
      this.storage = { 1: item };
    } else {
      this.quantity = Object.keys(this.storage).length;
      let key = lengthOfObject + 1;
      this.storage[key] = item;
    }
    this.quantity = Object.keys(this.storage).length;
    this.storage;
  },
  removeFromStorage: function () {
    let lengthOfObject = Object.keys(this.storage).length;
    if (lengthOfObject === 0) {
      return undefined;
    }
    let keyArray = Object.entries(this.storage);

    delete this.storage[lengthOfObject];
    const deletedItem = keyArray[keyArray.length - 1][1];
    return deletedItem;
  },
  isEmpty: function () {
    return this.quantity === 0 && Object.keys(this.storage).length === 0;
  },
  isFull: function () {
    return (
      this.quantity === this.maxSize &&
      Object.keys(this.storage).length === this.maxSize
    );
  },
  peekLastItem: function () {
    let keyArray = Object.entries(this.storage);
    const lastItem = keyArray[keyArray.length - 1][1];
    return lastItem;
  },
};

function createStack(stackName, maxSize = 10) {
  const obj = Object.create(stackProtoype);
  obj.quantity = 0;
  obj.storage = {};
  obj.maxSize = maxSize;

  return obj;
}

module.exports = createStack;
