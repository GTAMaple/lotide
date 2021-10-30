const assertEqual = function (actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};


const countLetters = function (allItems) {
  const letters = {}
  for (const item of allItems) {
    if (item !== " ") {
      if (letters[item]) {

        letters[item] += 1;

      } else {

        letters[item] = 1;

      }
    }
  }
  return letters;
}
console.log(countLetters("lighthouse in the house"));
