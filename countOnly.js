const assertEqual = function (actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed:, ${actual} ===  ${expected}`);

  } else {

    console.log(`❌Assertion Failed:, ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) { 
    //console.log(item); // Jason, Fang
    
    if (itemsToCount[item]) { // "itemToCount[Jason]",  check if item in array exist in key of object
      if (results[item]) { // "results[Jason]" ,put the result to empty array
        //typeof(results[item]) is number;
        console.log(results[item]); // results = {key:value}, results = {Jason:XX}, results[Jason]
        results[item] += 1; //results[item] = results[Jason]
        
      } else {
        results[item] = 1;
        
      }

    }

  }

  return results;
};

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
//console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);