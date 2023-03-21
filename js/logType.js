function testFunction(log) {
  return;
}
let data;

let input = [
  undefined,
  null,
  NaN,
  ["array"],
  42,
  "42",
  true,
  42n,
  testFunction(42),
  { number: 42 },
];
for (let i = 0; i < input.length; i++) {
  data = input[i];
  console.log(data);
  switch (true) {
    case data === undefined:
      console.log("undefined!");
      break;
    case data === null:
      console.log("null!");
      break;
    case Number.isNan(data):
      console.log("not a number!");
      break;
    case Array.isArray(data):
      console.log("array!");
      break;
    case typeof data === "number":
      console.log("number!");
      break;
    case typeof data === "string":
      console.log("string!");
      break;
    case typeof data === "boolean":
      console.log("boolean!");
      break;
    case typeof data === "bigint":
      console.log("bigint!");
      break;
    case typeof data === "function":
      console.log("function!");
      break;
    case typeof data === "object":
      console.log("object!");
      break;
    default:
      console.log("I have no idea!");
      break;
  }
}

// ("undefined!");
// ("null!");
// ("array!");
// ("number!");
// ("string!"
// ("not a number!");
// ("boolean!");
// ("bigint!");
// ("function!");
// ("object!");
// ("I have no idea!");
