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

const without = function(source,itemsToRemove){
let filterArray = [];
for( let item of source){
  if(!itemsToRemove.includes(item)){ // check if item doesn't exist in itemToRemove
    filterArray.push(item);
  }

}
return filterArray;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),[1, 5]);