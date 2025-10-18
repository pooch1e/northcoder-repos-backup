function makeCounter() {
let count = 0;
function logCount() {
	console.log(`The count is ${count}`)
}
  
  function incrementCount() {
    return count++;

  }
  return {
  logCount,
  incrementCount,
  }
}

const counter = makeCounter();
counter.incrementCount();
counter.incrementCount();
counter.incrementCount();

counter.logCount();
