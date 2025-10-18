const queueProto = {
  enQueue: function (item) {
    const storageSize = Object.keys(this.storage).length;
    if (storageSize < this.maxSize) {
      this.storage[storageSize + 1] = item;
    } else {
      return;
    }
  },
};

function createQueue(maxSize) {
  // build your queue object inside this factory function
  const obj = Object.create(queueProto);
  obj.maxSize = maxSize;
  obj.front = 0
  obj.back = 0
  obj.storage = {};

  return obj;
}

module.exports = createQueue;
