
const assertEqual = function (actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
    return true;

}

const eqObjects = function (object1, object2) {
  let obj1 = Object.keys(object1); // [a, b]
  let obj2 = Object.keys(object2); // [b, a]

  
  if (obj1.length !== obj2.length) {

    return false;
  } else {

    for (let key of obj1) {

      if (obj1[key] === obj2[key]) { // compare 2 values between 2 objects
        
        if(Array.isArray(obj1[key] === true)){ // check if is array itself
          return eqArrays(obj2[key], obj1[key]); // compare 2 arrays, check if equal
        }
        return false;
      }
    }
    
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false