const getMessage = require('../getMessage')
const data = require('../data/testData.json')

describe('getMessage', () => {
    test("returns the test data when invoked from the test file", () => { 
        expect(getMessage(data)).toBe('Hello from test data!')
    })
});