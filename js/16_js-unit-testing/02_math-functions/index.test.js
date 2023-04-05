import { add, subtract, multiply, divide } from "./index.js";

// ADD function tests
/*  1   */
test("add function return 5 when called with arguments '2' & '3'", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

/*  2   */
test("add function returns a negative number when one argument is a negative vallue larger than the other", () => {
  const result1 = add(1, -3);
  expect(result1).toBeLessThan(0);
});

/*  3   */
test("add function returns close to 0.3 when arguments called with arguments '0.1' & '0.2'", () => {
  const result = add(0.2, 0.1);
  expect(result).toBeCloseTo(0.3);
});

//  SUBTRACT test function
/*  1   */
test("subtract function returns 10 when called with arguments '15' & '5'", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

/*  2    */
test("subtract function returns a negative value when called with a larger second argument", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//   MULTIPLY test function
/*  3   */
test("multiply function returns 8 when called with arguments '2' & '4'", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

/*  4   */
test("multiply function returns negative value when first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

/*  5   */
test("multiply function returns negative value when second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

/*  6   */
test("multiply function returns positive value when both arguments are negative", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

//   DIVIDE test function
/*   1  */
test("divide function returns 3 when called with arguments '9' & '3'", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

/*   2  */
test("divide function returns 'You should not do this!' when divided by 0", () => {
  const result = divide(5, 0);
  expect(result).toBe("You should not do this!");
});
