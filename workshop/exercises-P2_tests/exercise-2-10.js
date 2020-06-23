// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  //take full sentence
  const sentenceArray = sentence.split(" "); // split sentence into array of individual words
  let titleWordArray = []; //create empty array
  for (i = 0; i < sentenceArray.length; i++) {
    // iterate over each word in split array, push capitalized words into new array
    titleWordArray.push(
      sentenceArray[i].slice(0, 1).toUpperCase() +
        sentenceArray[i].slice(1, sentenceArray[i].length).toLowerCase()
    );
    // console.log(titleWord);
  }
  const title = titleWordArray.join(" "); //join capitalized words into new sentence
  // console.log(title);
  return title;

  // let titleSentence = sentenceArray.join(" ");
}

// Add 6 total (5 more)
expect(
  makeIntoTitle("the longest road is a great song"),
  "The Longest Road Is A Great Song"
);

expect(
  makeIntoTitle("DOCTOR STRANGELOVE OR HOW I LEARNED TO LOVE THE ATOMIC BOMB"),
  "Doctor Strangelove Or How I Learned To Love The Atomic Bomb"
);
expect(
  makeIntoTitle("i'M sO WaCkY thIs Is HoW i tYpE"),
  "I'm So Wacky This Is How I Type"
);
expect(makeIntoTitle("hey hey we're the monkees"), "Hey Hey We're The Monkees");
expect(
  makeIntoTitle(
    "what if there are some ---     --- blanks and punctuation marks?"
  ),
  "What If There Are Some ---     --- Blanks And Punctuation Marks?"
);
expect(
  makeIntoTitle("does it do anything to numb3r5"),
  "Does It Do Anything To Numb3r5"
);

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
