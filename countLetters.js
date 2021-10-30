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
const result = (countLetters("lighthouse in the house"));
assertEqual(result['g'],1); // compare the value inside the key[g]
assertEqual(result['w'],1);
