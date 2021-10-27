const assertEqual = function(actual, expected) {

  if (JSON.stringify(actual) === JSON.stringify(expected)) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArr = array.slice(1);
  return tailArr;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(tail([5, 6, 7]), [5, 7]);

