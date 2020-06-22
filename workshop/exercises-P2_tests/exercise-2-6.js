// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  switch (arr[0]) {
    case "add":
      const sumCase = arr[1] + arr[2];
      if (typeof sumCase === "number") {
        return sumCase;
      }
      return undefined;
    case "sub":
      const subCase = arr[1] - arr[2];
      if (typeof subCase === "number") {
        return subCase;
      }
      return undefined;

    case "mult":
      const multCase = arr[1] * arr[2];
      if (typeof multCase === "number") {
        return multCase;
      }
      return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["sub", -22, 9]), -31);
expect(calculator(["add", "2", 4]), undefined);
expect(calculator(["mult", -12, -4]), 48);
expect(calculator(["sup", 2, 4]), undefined);
expect(calculator(["mult", 2465, 43]), 105995);
expect(calculator(["add", "yes", "no"]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
