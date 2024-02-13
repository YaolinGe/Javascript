// Add the test for the timesTwo function in the timesTwo.test.js file.
// load the timesTwo function from the timesTwo.js file

const timesTwo = require('./timesTwo');

// test the timesTwo function
test('returns the number multiplied by 2', () => {
    expect (timesTwo(1)).toBe(2);
})