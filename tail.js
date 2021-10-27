const assertEqual = function(actual, expected) {
// compare 2 arrays
  if (JSON.stringify(actual) === JSON.stringify(expected)) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};
// access tail of arrays
const tail = function(array) {
  let tailArr = array.slice(1);
  return tailArr;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(tail([5, 6, 7]), [5, 7]);

