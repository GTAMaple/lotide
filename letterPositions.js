

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

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    
    if(sentence[i] !== " "){
      
      if(results[sentence[i]]){ // add item of aray to be a key of Obj
        results[sentence[i]].push[i]; // add value (index of array) to the Obj
      }else{
        results[sentence[i]] =[i];
      }

    }

  }
  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);