// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  const splitString = str.split(" "); // returns an array of strings
  let maxLength = 0;
  let longWord = "";
  splitString.forEach(function (element) {
    // console.log(element);
    if (element.length >= maxLength) {
      longWord = element;
      maxLength = element.length;
    }
  });
  // console.log(longWord);
  return longWord;
}

expect(longestWord("this is a sentence"), "sentence");
expect(longestWord(""), "");
expect(longestWord("this is a test"), "test");
expect(longestWord("bleep bloop blorp"), "blorp");
expect(longestWord("bibbity bobbity boo"), "bobbity");
expect(longestWord("first word for the win"), "first");

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
