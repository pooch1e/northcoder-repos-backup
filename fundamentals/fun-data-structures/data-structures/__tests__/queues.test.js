const createQueue = require("../queues")

// create test suite for queue data structure here
describe('tests for queue', () => {
  describe('object has correct properties', () => {
  test('object has front, back and storage properties', () => {
    const objectTest = createQueue(2);
    expect(Object.hasOwn(objectTest, 'front')).toBe(true)
    expect(Object.hasOwn(objectTest, 'back')).toBe(true)
    expect(objectTest.storage).toEqual({});
  })
  test('enQ adds item to the back of the queue', () => {
    const objectTest = createQueue(2)
    objectTest.enQueue('legume');
    expect(objectTest.storage).toEqual({1 : 'legume'})
  })
  test('enQ adds item to back of queue when storage NOT full', () => {
    const objectTest = createQueue(3)
    objectTest.enQueue('legume');
    objectTest.enQueue('fmSynth');
    expect(objectTest.storage).toEqual({1 : 'legume', 2 : 'fmSynth'})
  })
  test('enQ does not add item when storage is full', () => {
    const objectTest = createQueue(3)
    objectTest.enQueue('legume');
    objectTest.enQueue('fmSynth');
    objectTest.enQueue('football');
    objectTest.enQueue('potato');

    expect(objectTest.storage).toEqual({1 : 'legume', 2 : 'fmSynth', 3: 'football'})
  })
  })
})