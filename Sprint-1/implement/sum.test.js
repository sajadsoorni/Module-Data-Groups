/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test.todo("given an empty array, returns 0");

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("sums numbers in an array", () => {
  expect(sum([1, 2, 3])).toBe(6); // 1 + 2 + 3 = 6
});

test("ignores non-number elements", () => {
  expect(sum([1, "a", 3])).toBe(4); // 1 + 3 = 4, 'a' is ignored
});

test("works with negative numbers", () => {
  expect(sum([10, -5, 5])).toBe(10); // 10 - 5 + 5 = 10
});

test("returns 0 when no numbers are present", () => {
  expect(sum(["x", "y", "z"])).toBe(0); // No numbers, sum = 0
});

test("works with an empty array", () => {
  expect(sum([])).toBe(0); // Empty array, sum = 0
});
