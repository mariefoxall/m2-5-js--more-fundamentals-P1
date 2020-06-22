// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  const splitString = str.split("");
  return splitString[index];
}

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");
expect(getLetterAtIndex("bye", 4), undefined);
expect(getLetterAtIndex("48,973,621", 6), ",");
expect(getLetterAtIndex("-7632", 4), "2");
expect(getLetterAtIndex("how many tests can we do", 12), "t");
expect(getLetterAtIndex("turns out a whole bunch WOW", -1), undefined);
expect(getLetterAtIndex("last-one", 4), "-");

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
