const eqObjects = function (object1, object2) {
  let obj1 = Object.keys(object1); // [a, b]
  let obj2 = Object.keys(object2); // [b, a]

  
  if (obj1.length !== obj2.length) {

    return false;
  } else {

    for (let key of obj1) {

      if (obj1[key] !== obj2[key]) { // checking key2 are the same
        
        if(Array.isArray(obj1[key] === true)){ // check if is array itself
          return eqArrays(obj2[key], obj1[key]); // compare 2 arrays, check if equal
        }
        return false;
      }
    }
    
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {

    console.log(`✅Assertion Passed:, ${inspect(actual)} ===  ${inspect(expected)}`);

  } else {

    console.log(`❌Assertion Failed:, ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false