import { add, subtract, multiply, divide } from "./index.js";

/* add function tests
 *   returns 5 if called with add(2, 3)
 */
test("add function return 5 when arguments called with arguments '2' & '3'", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

/*
 *   returns a negative value if the greater argument is negative (Hint: use the matcher toBeLessThan())
 */
test("add function returns a negative number when one argument is a negative vallue larger than the other", () => {
  const result1 = add(1, -3);
  expect(result1).toBeLessThan(0);
});

/*  returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher toBeCloseTo())*/
test("add function returns close to 0.3 when arguments called with arguments '0.1' & '0.2'", () => {
  const result = add(0.2, 0.1);
  expect(result).toBeCloseTo(0.3);
});
