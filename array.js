console.clear();
const arrayLike = {
  0: "Value 0",
  1: "Value 1",
  length: 2,
};

// const convetArr = Array.from(arrayLike);
// convetArr.forEach((val) => console.log(val));

const realArray = Object.keys(arrayLike).map((val) => arrayLike[val]);
// console.log(realArray);

// es5

// dlkf.forEach(element => {});

// prototype

// Array.prototype.forEach.call(variableName, fucntion(){
//     retrun
// })

// [].forEach.bind(arrayLike)(function (val) {
//   console.log(val);
// });

/* Reduce method */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sumation
const reduceResult = arr.reduce(function (acc, cur, index, arr) {
  return acc + cur;
});
// console.log(reduceResult);

/* Flatten Array an Objects */

const array = [
  {
    key: "One",
    value: 1,
  },
  {
    key: "Two",
    value: 2,
  },
  {
    key: "Three",
    value: 3,
  },
  {
    key: "Four",
    value: 4,
  },
  {
    key: "Five",
    value: 5,
  },
];
/* ES5 version*/

const es5 = array.reduce((acc, cur) => {
  acc[cur.key] = cur.value;
  return acc;
}, {});

// console.log(flattenArr);

/* ES6 version */

const es6 = array.reduce((acc, cur) => {
  Object.assign(acc, { [cur.key]: cur.value });
  return acc;
}, {});
// console.log(es6);

/* ES7 version */

const es7 = array.reduce((obj, cur) => ({ ...obj, [cur.key]: cur.value }), {});
// console.log(es7);

const obj = {
  name: "Arjun",
  userName: "Roy",
  age: 25,
  address: "Nawpara",
};
for (let [key, value] of Object.entries(obj)) {
  // console.log(`${key} : ${value}`);
}
// Object.entries(obj).forEach(([key, values]) =>
//   // console.log(`${key} : ${values}`)
// );
// Map Using Reduce
const map = (arr, cb) => {
  return arr.reduce((newArr, item) => {
    return newArr.concat(cb(item));
  }, []);
};

// console.log(map([1, 2, 3, 4], (n) => n * n));
//Find Min
const minNumber = arr.reduce((min, item) => {
  return min < item ? min : item;
}, Infinity);
// console.log(minNumber);

// Max Value

const maxValue = arr.reduce((max, item) => {
  if (item > 5) {
    max.push(item);
  }
  return max;
}, []);
// console.log(maxValue);

// Find Unique values

const arrs = [
  1,
  2,
  3,
  1,
  3,
  1,
  4,
  5,
  7,
  5,
  4,
  6,
  7,
  5,
  "a",
  "b",
  -1,
  -2,
  -1,
  "a",
];
const findUniqueValue = arrs.reduce((arrs, item) => {
  if (arrs.indexOf(item) === -1) {
    arrs.push(item);
  }

  return arrs;
}, []);
// console.log(findUniqueValue);

// Count Unique value

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

const fruitResult = fruitBasket.reduce((arr, fruit) => {
  arr[fruit] = (arr[fruit] || 0) + 1;
  return arr;
}, {});
// console.log(fruitResult);

const data = [
  { a: "happy", b: "robin", c: ["blue", "green"] },
  { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
  { a: "sad", b: "goldfish", c: ["green", "red"] },
];
const datakeyCValue = data.reduce((acc, item) => {
  item.c.forEach((val) => {
    acc.push(val);
  });
  return acc;
}, []);

// unique value
const datakeyCValues = data.reduce((acc, item) => {
  item.c.forEach((val) => {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
  });
  return acc;
}, []);
// console.log(datakeyCValues);

/* Map method */
const stringArray = ["one", "two", "three", "four"];
const arrLanght = stringArray.map(
  function (val) {
    // console.log(this);
    return val.length;
  },
  {
    documentation: "rendomObjecj",
  }
);
// console.log(arrLanght); //value lenght show 3, 3 ..

/* Filter Object Array */
// Odd Number show
const odd = arr.filter((val) => {
  if (val % 2 == 0) {
    return val;
  }
});
// console.log(odd);

const event = arr.filter((val) => {
  if (val % 2 !== 0) {
    return val;
  }
});
// console.log(event);

var people = [
  {
    id: 1,
    name: "John",
    age: 35,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "JaneTill",
    age: 30,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

const ageFilter = people.filter((person) => {
  if (person.name.length > 4) {
    return person;
  }
  if (person.id > 1) {
    return person;
  }
  if (person.age > 20) {
    return person;
  }
});
// console.log(ageFilter);

// find value indexOf 0 and show value

const valueIndexOf_J = people.filter((obj) => {
  let flag = false;
  Object.values(obj).forEach((val) => {
    if (String(val).indexOf("J") > -1) {
      flag = true;
      return;
    }
  });
  if (flag) return obj;
});
// console.log(valueIndexOf_J);

/* Sort Array */

// Default sort

arr.sort();
// console.log(arr);

/// Alphadatic sort

const alphabaticSort = [
  "a",
  "b",
  "g",
  "d",
  "c",
  "e",
  "h",
  "l",
  0,
  "k",
  "s",
  5,
  1,
  3,
  2,
  4,
  "v",
  "f",
  "h",
  "i",
  "m",
  "k",
  "o",
  "n",
];

alphabaticSort.sort(function (a, b) {
  return a.toString().localeCompare(b);
});
// console.log(alphabaticSort);

// String sorting by lenght (longest first)

const longString = [
  "a",
  "abc",
  "ab",
  "abcdef",
  "abcd",
  "ab",
  "abcde",
  "abcdefg",
];
// longest first
const longestString = longString.sort((a, b) => {
  return b.length - a.length;
});

// console.log(longestString);

// shortest first

const shortestString = longString.sort((a, b) => {
  return a.length - b.length;
});
// console.log(shortestString);
// console.log(JSON.stringify(shortestString, null, "\t"));
// console.log(JSON.stringify(shortestString, null, 1));

function sortFunc(arr, yesNO) {
  arr.sort(function (a, b) {
    if (yesNO) {
      console.log(a.length - b.length);
    } else {
      console.log(b.length - a.length);
    }
  });
}

// sortFunc(longString, false);// this function is not working

// numerical Sort

const numericalSortAscending = arr.sort((a, b) => {
  return a - b;
});
// console.log(numericalSortAscending);

// numerical Sort decending

const numericalSortDescending = arr.sort((a, b) => b - a);
// console.log(numericalSortDescending);
// console.log(arr);

/* Sort by event of odd number */
arr.sort((a, b) => (a & 1) - (b & 1) || a - b);
// console.log(arr); // This is First event number

arr.sort((a, b) => (b & 1) - (a & 1) || a - b);
// console.log(arr); // This is odd first number

/* Date sort descending */

let dates = [
  new Date(2007, 11, 10),
  new Date(2014, 2, 21),
  new Date(2009, 6, 11),
  new Date(2016, 7, 23),
];
// Descending
dates.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
});

// console.log(dates);
// ascending

dates.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
// console.log(dates);
[2, 4, 7, 9].some(function (value, index, arr) {
  // console.log(value);
  return value === 9; // iterate until an odd number is found
});

/* Destructureing an Arrry */

const [f, , e, s, t] = arr;

// console.log(s);

// function is arguments destructure

function sums([height, width]) {
  return (height + width) / 2;
}
// const aresa = [1, 2, 3];
// console.log(sums([1, 2, 3]));

/* Removeing duplicate elements */

const removeDuplicateFriut = fruitBasket.filter((val, i, arr) => {
  return arr.indexOf(val) === i;
});
// console.log(removeDuplicateFriut);
// console.log(fruitBasket.lastIndexOf("banana"));
// console.log(fruitBasket.includes("banana"));

/* Use to Set Data Structure */

const setFriut = new Set(fruitBasket);
// console.log(setFriut);

for (let key of setFriut) {
  // console.log(key);
}

/* Array Comparison */

// JSON.stringify(arr1) === JSON.stringify(arr2); // output Json string

/* Deeply array comparison */

function comparisonArray(array1, array2) {
  let i, arr1, arr2;

  arr1 = Array.isArray(array1);
  arr2 = Array.isArray(array2);

  if (arr1 !== arr2) {
    return false;
  }

  if (!(arr1 && arr2)) {
    return array1 === array2;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (i = 0; i < array1.length; i += 1) {
    if (!comparisonArray(array1[i], array2[i])) {
      return false;
    }
  }
  return true;
}

// a = [0];
// a[1] = a;
// b = [0, a];
// console.log(comparisonArray(a, b));
// console.log(comparisonArray({ a: 0 } === { a: 0 }));

/* Reverse Array */

// console.log(arr.reverse());
// console.log(fruitBasket.reverse());

// Deeply reverse array

function reverse(arr) {
  arr.reverse().forEach((val) => {
    if (Array.isArray(val)) {
      reverse(val);
    }
  });
  return arr;
}
var customArray = [1, 2, 3, [1, 2, 3, ["a", "b", "c"]]];
// console.log(reverse(customArray));

/* Shallow cloneing an Array */

// ES6 Clone

const arrayToClone = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arrayToClone);

const clone1 = Array.from(arrayToClone); // 1 method
clone1[9] = 10;
// console.log(clone1);
// console.log(arrayToClone);

const clone2 = Array.of(...arrayToClone); // 2 method
clone2[9] = 10;
// console.log(clone2);
// console.log(arrayToClone);

const clone3 = [...arrayToClone];
clone3[9] = 500;
// console.log(clone3);
// console.log(arrayToClone);

// ES5 Clone

const clone4 = Array.prototype.slice.call(arrayToClone);
clone4[9] = 120;
// console.log(clone4);
// console.log(arrayToClone);

const clone5 = [].slice.call(arrayToClone);
clone5[9] = 125;
// console.log(clone5);
// console.log(arrayToClone);

/* Concatanation Array */

// es3 concatanation

const es3concat = arrayToClone.concat(fruitBasket);
// console.log(es3concat);

// es6 concatanation and multiple array concat

const es6conta = [...arrayToClone, ...fruitBasket, ...customArray];
// console.log(es6conta);

/* Withuot copy and first Array */

const longArray = [1, 2, 3, 4, 5, 6, 7],
  shortArray = [2, 3, 4];

// longArray.push(...shortArray);
// console.log(longArray);

// shortArray.forEach((val) => longArray.push(val));
// console.log(longArray);

/* Array and non-array */
// es5
// const arrayToarray = longArray.concat(...shortArray, "a", "b");
// console.log(arrayToarray);
// es6
const es6ArrayToArray = [...longArray, "c", "d", "e", ...shortArray];
// console.log(es6ArrayToArray);

/* marge to array and key value pair */

let columns = ["Date", "Number", "Size", "Location", "Age"];
let rows = ["2021", "10", "Medium", "Nawpara", "25"];

const columnsRowsResult = rows.reduce((result, field, index) => {
  result[columns[index]] = field;
  // console.log(result[columns[index]]);
  return result;
}, {});
// console.log(columnsRowsResult);
// console.log([..."Arjun"]); // work with some split method

// console.log([1, 2, 3, ...[..."456789"]].map((x) => parseInt(x)));

/* Aegin filter method*/

longArrays = [1, 2, 3, 4, 5, 6, 7];

const filterArrays = longArrays.filter((val, ind, arr) => {
  return val > 5;
});
// console.log(filterArrays);

// Another simple example

function startsWithLatterA(str) {
  if (str && str[0].toLowerCase() == "f") {
    return true;
  }
  return false;
}

const str = `Since Boolean is a native javascript function/constructor that takes [one
optional parameter] and the filter method also takes a function and passes it the current array
item as a parameter, you could read it like the following`;
const strArray = str.split(" ");

const worStartsWithA = strArray.filter(startsWithLatterA);
// console.log(worStartsWithA);

/* Searching and Array */

const searchArray = longArray.find((val) => val === 5);
// console.log(searchArray);

const searchObject = [{ name: "Arjun" }, { name: "Urmi" }];
// use to find callback function
const searchobjectname = searchObject.find((person) => person.name == "Arjun");
// console.log(searchobjectname);

// use to find for loop

// for (let i = 0; i < searchObject.length; i++) {
//   if (searchObject[i].name === "Arjun") {
//     break;
//   }

/* findIndex method */

const findIndexValue = searchObject.findIndex((item) => item.name === "Arjun");
// console.log(findIndexValue);

/* Remove all array element */

let removeArray = [1, 2, 3, 4, 5, 6, 7];

// console.log(removeArray);

// removeArray = []; // method 1

// removeArray.length = 0; // mothod 2

// removeArray.splice(0); // method 3

// console.log(removeArray);

/* Max or Min array */

// console.log(Math.min.apply(null, removeArray)); // 1
// console.log(Math.max.apply(null, removeArray)); // 7

// console.log(Math.min(...removeArray)); // 1
// console.log(Math.max(...removeArray)); // 7

// max value custom function or deeply create function

let currentValueOfFirstIndex = removeArray[0];

for (let i = 0; i < removeArray.length; i++) {
  let currentRemoveArrayValue = removeArray[i];

  if (currentRemoveArrayValue > currentValueOfFirstIndex) {
    currentValueOfFirstIndex = currentRemoveArrayValue;
  }
}
// console.log(currentValueOfFirstIndex); // 7

/* Useing reduce method */

const reduceToMinValue = removeArray.reduce((a, b) => Math.min(a, b));
// console.log(reduceToMinValue); // 1
const reduceToMaxValue = removeArray.reduce(
  (a, b) => Math.max(a, b),
  -Infinity
);
// console.log(reduceToMaxValue); // 7
const reduceMinFunc = removeArray.reduce((a, b) => {
  return a < b ? a : b;
}, Infinity);
// console.log(reduceMinFunc);

// ues to fucntion

function myMax(array) {
  return array.reduce((maxSoFor, item) => {
    return Math.max(maxSoFor, item);
  }, -Infinity);
}
// console.log(myMax([1, 3, 4])); // 4
// console.log(myMax([])); // -Infinity
// console.log(Math.max.apply(null, [])) // -Infinity
// console.log(Math.max([]));
// console.log(Math.max.apply(null, []));

/* standerd array initialization */

// [1, 23,] // array literal
// new Array(21) array constructor

/* Use to Array.of function array literal */

const arrayOfLiteral = Array.of(32, 23, 43, "Arjun", "Samin", "Sorna");

// console.log(arrayOfLiteral);

/* joining array element in the string */

const arrayToStringConvert = fruitBasket.join(" ");
// console.log(arrayToStringConvert);

// console.log(["Arjun", "Urmi"].toString());

/* Flattening Array */

var arrL1 = [1, [2, 4], [5, 5], [3, 4]];

// use to fucntion ES6
function flattenES6(val) {
  return [].concat(...val);
}
// console.log(flattenES6(arrL1));
// console.log(arrL1.flat()); // ES7

// use to fucntion ES5

function flattenES5(val) {
  return [].concat.apply([], val);
}
// console.log(flattenES5(arrL1));

/* Higher Dimension Array */

const deeplyNested = [4, [5, 6, [7, 8], 9]];
// console.log(deeplyNested.flat()); // output : [ 4, 5, 6, [ 7, 8 ], 9 ]
// const higherDArrayResult = String(deeplyNested).split(",").map(Number); // method 1
const higherDArrayResult2 = deeplyNested.toString().split(",").map(Number);
// console.log(higherDArrayResult2);
// console.log(deeplyNested.flat());

let objecttoArry = {
  key1: 10,
  key2: 3,
  key3: 40,
  key4: 20,
};

let objectToArrayConvert = [];
for (let key in objecttoArry) {
  objectToArrayConvert.push([key, objecttoArry[key]]);
}
// console.log(objectToArrayConvert);

/* sorting multiple array */

let arraytosort = [
  ["key1", 10],
  ["key2", 3],
  ["key3", 40],
  ["key4", 20],
];

arraytosort.sort((a, b) => a[1] - b[1]);
// console.log(arraytosort);
