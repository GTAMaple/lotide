const assertEqual = function (actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let resultObj = {};

  for (let key in itemsToCount) { // iterate to "key" inside Obj ex. Jason, Karima, Fang
    //console.log(key);
    if (itemsToCount[key]) { //if the "value of key" is = true, then look for "key" is inside array
    console.log(key);
    console.log(itemsToCount[key]); 
    }

  }

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);