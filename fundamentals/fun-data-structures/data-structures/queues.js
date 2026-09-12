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

  // methods
  return {
    
  }
}

module.exports = createQueue;
