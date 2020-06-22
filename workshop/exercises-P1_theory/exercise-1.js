// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(""); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
square(decrement(square(decrement(3))));

//decrement(3)
//return 3 - 1 = 2

//square(decrement(3)) = square(2)
//return 2 * 2 = 4

//decrement(square(decrement(3))) = decrement(4)
//return 4 - 1 = 3

//square(decrement(square(decrement(3)))) = square(3)
//return 3 * 3 = 9

//value of the expression is 9

// 1-2
decrement(decrement(square(square(3))));

//square(3)
//return 3 * 3 = 9

//square(square(3)) = square(9)
//return 9 * 9 = 81

//decrement(square(square(3))) = decrement(81)
//return 81 - 1 =80

// decrement(decrement(square(square(3)))) = decrement(80)
//return 80 - 1 = 79

//value of the expression is 79

// 1-3
duplicateString(reverseString("hello"));
console.log(duplicateString(reverseString("hello")));

//reverseString("hello")
//splitString("hello")
//return [h,e,l,l,o]

//reverseArray([h,e,l,l,o])
//return [o,l,l,e,h]

//joinArray([o,l,l,e,h])
//return "olleh"

//duplicateString(olleh)
//return "olleh".concat("olleh)" = "olleholleh"

//value of the expression is "olleholleh"

// 1-4
reverseString(duplicateString(duplicateString("foo")));

//duplicateString("foo")
//return "foo".concat("foo") = "foofoo"

//duplicateString(duplicateString("foo")) = duplicateString("foofoo")
//return "foofoo".concat("foofoo") = "foofoofoofoo"

//reverseString(duplicateString(duplicateString("foo"))) = reverseString("foofoofoofoo")

//splitString("foofoofoofoo")
//return [f,o,o,f,o,o,f,o,o,f,o,o]

//reverseArray([f,o,o,f,o,o,f,o,o,f,o,o])
//return [o,o,f,o,o,f,o,o,f,o,o,f]

//joinArray([o,o,f,o,o,f,o,o,f,o,o,f])
//return "oofoofoofoof"

//value of the expression is "oofoofoofoof"
