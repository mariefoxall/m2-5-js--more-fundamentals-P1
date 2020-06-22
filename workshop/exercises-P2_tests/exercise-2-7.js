// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  if (typeof arr[1] === "number" && arr[1] > 0) {
    let stringRepeat = "";
    for (i = 1; i <= arr[1]; i++) {
      stringRepeat = stringRepeat.concat(arr[0]);
    }
    return stringRepeat;
  } else if (typeof arr[1] === "number" && arr[1] <= 0) {
    return "";
  } else {
    return undefined;
  }
}

expect(repeat(["yo", 2]), "yoyo");
expect(repeat(["yo", -10]), "");
expect(
  repeat(["testing", 7]),
  "testingtestingtestingtestingtestingtestingtesting"
);
expect(repeat(["yo", "yo"]), undefined);
expect(repeat(["-17", 4]), "-17-17-17-17");
expect(repeat(["-17", -17]), "");
expect(repeat(["0", 0]), "");
// We need 7 test cases.
// Don't forget to test all of the question parameters

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
