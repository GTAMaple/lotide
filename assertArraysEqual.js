const eqArrays = function(array1, array2) {
  
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
    return true;

}

const assertArraysEqual = function(arrOne, arrTwo){
  
    if (eqArrays(arrOne,arrTwo)) {
    
    console.log(`✅Assertion Passed:, ${arrOne} ===  ${arrTwo}`);
    
  } else {
    
    console.log(`❌Assertion Failed:, ${arrOne} !== ${arrTwo}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 1, 3], [1, 2, 3]);