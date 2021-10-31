const assertEqual = function (actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (bestTVShowsByGenre, movie) {

  let byGenre = Object.keys(bestTVShowsByGenre);// [ 'sci_fi', 'comedy', 'drama' ]

  for (let val of byGenre) {
    //bestTVShowsByGenre[val] Add key to Obj
    if (bestTVShowsByGenre[val] === movie) {
      return val;
    }

  }

}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
