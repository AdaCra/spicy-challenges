let input = [];
let data;
if (input == null) {
  data = null;
} else if (Array.isArray(input)) {
  data = "array";
} else {
  data = typeof input;
}
console.log("input: ", typeof input, "data: ", typeof data);

switch (data) {
  case "undefined":
    console.log("undefined!");
    break;
  case null:
    console.log("null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log("object!");
    break;
  case "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");
}

// ("undefined!");
// ("null!");
// ("number!");
// ("not a number!");
// ("string!");
// ("boolean!");
// ("bigint!");
// ("function!");
// ("object!");
// ("array!");
// ("I have no idea!");
