const assertArraysEqual = function (arrOne, arrTwo) {

  if (eqArrays(arrOne, arrTwo)) {

    console.log(`✅Assertion Passed:, ${arrOne} ===  ${arrTwo}`);

  } else {

    console.log(`❌Assertion Failed:, ${arrOne} !== ${arrTwo}`);
  }
}

const eqArrays = function (array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

}

const middle = function (arr) {
  
  if (arr.length <= 2) { // empty array

    return [];
  } else if (arr.length % 2 === 0) { // even array

    return [arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]];


  } else { // odd array

    return [arr[Math.floor(array.length / 2)]];

  }

}
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);