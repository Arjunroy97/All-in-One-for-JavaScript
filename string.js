console.clear();
// Number to string convart
const intString = (1234).toString();

// Boolen to string convart

const booSting = true.toString();
// console.log(booSting);

// Object to String convart

const objString = {}.toString();
// console.log(objString);

// new keyword use to String

const objectString = new String("Hello I am Arjun Singh");
// console.log(objectString);
// console.log(typeof objectString); object

/* Object iteration */
// for (let key in objectString) {
//   console.log(objectString[key]);
// }

// console.log(objectString.valueOf());

const fromCarCode = String.fromCharCode(104, 101, 108, 108, 111); //"hello"
// console.log(fromCarCode);

/* Concatanation String */

let foo = "Arjun";
let bar = "Samir";

// console.log(foo + bar); 1 method

// console.log(foo.concat(bar)); 2 method

// console.log(foo + " " + bar); 3 method

/* New Concatanation and new text add */

const str = "a".concat("b", ", ", "d");
// console.log(str);

/* String Template (backticks)*/

const hello = `Hello`;
const greet = `${hello} backticks`;

// console.log(greet);

/* use backslashes */

// console.log(`a\\b`);

// console.log(String.raw`a\\b`);

/* Reverse String */

// useTo reverse function
/* ES5 function */

function reverseToString(str) {
  return str.split("").reverse("").join("");
}
// console.log(reverseToString("Arjun"));

/* ES6 */

function reverseStr(str) {
  //   console.log([...String(str)]);
  return [...String(str)].reverse("").join("");
}
// console.log(reverseStr("Urmi"));

/* Custom reverse function */

function reverse(str) {
  let strRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  return strRev;
}

// const reslut = reverse("Arjun");
// console.log(reslut);

/* LocalCompare comparing and string loxicographically */

let a = "hello";
let b = "world";
let c = a.localeCompare(b);
// console.log(a.charAt(2));
// console.log(c);

/* Use to function */

function strCmp(a, b) {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return 1;
  } else {
    return -1;
  }
}
// console.log(strCmp("hello", "world"));
// console.log(strCmp("world", "hello"));
// console.log(strCmp("hello", "hello"));

/* Alphabatic sort use to localCompare */

const fried = ["banana", "apple", "cranbarries"];

const friedName = fried.sort((a, b) => {
  return a.localeCompare(b);
});
// console.log(friedName);

/* Access character at index in strtin */

let d = "hello";
// console.log(d.charAt(1)); 1 method
// console.log(d[2]); 2 method
// console.log(d.charCodeAt(1));

/* Escaping quotes */

d = String.raw`Hello '\\world'`;
// console.log(d);

/* Word Counter Textarea fill */
// const textarea = document.getElementById("text");
// const show = document.getElementById("out");
// function wordCouter(val) {
//   let mow = val.match(/\S+/g);
//   return {
//     characterOnSpace: val.replace(/\S+/g).length,
//     character: val.length,
//     words: mow ? mow.length : 0,
//     lines: val.split(/\r*\n/).length,
//   };
// }

// textarea.addEventListener(
//   "input",
//   function () {
//     let value = wordCouter(this.value);
//     show.innerHTML = `
//         characterOnSpace :${value.characterOnSpace}<br>
//         character : ${value.character}<br>
//         words : ${value.words}<br>
//         lines : ${value.lines}
//     `;
//   },
//   false
// );

/* Trim */

// console.log("               Hello Dolly               ".trim());
// console.log("               Hello Dolly               ".trimStart());
// console.log("               Hello Dolly               ".trimEnd());

/* split method */

let number = "one, two, three, four, five, six, sever, eight";

// console.log(typeof number.split(" "));

// console.log(number.split(", ").join("--"));

// string to unicode
// console.log(number.charAt(1));
// console.log(number.codePointAt(1));

/* Detecting a String */

let aStr = "String hig";
let anNum = 214;
let anObj = {};
// console.log(aStr.repeat(3));
// console.log(aStr.includes("hig"));
// console.log(aStr.includes("hisg"));
// console.log(aStr.indexOf("S"));
// console.log(aStr.lastIndexOf("g"));
// console.log(aStr.replace("hig", "Template"));
// console.log(aStr);
// console.log(aStr.valueOf());
// console.log(aStr.substring());
// console.log(aStr === "String");
// console.log(anNum === "String");
// console.log(anObj === "String");

let stringControuctor = new String("I am String");
// console.log(stringControuctor instanceof String);

// use to function

let isString = function (val) {
  return val === "String" || val instanceof String;
};

// console.log(isString("hello"));// return true;

// console.log(isString(aStr));// return true;

// console.log(isString(325));// false;

// console.log(isString(stringControuctor));// true;

/* String representation of a number */

// decimal number bass(12)
let b10 = 10;
// convart string representation and bass(16)
let b16 = b10.toString(16);

// console.log(b16); // a

let ba16 = "a";

let bass10 = parseInt(ba16, 16);
// console.log(bass10);

/// convart float number and ip = 4.14159
let floatNum = "3.243f3e0370cdc";

let [fristAr, secondArr] = floatNum.split(".");

let intNum = parseInt(fristAr, 16);
let secondNumber = parseInt(secondArr, 16) / Math.pow(16, secondArr.length);
let sumResult = intNum + secondNumber;
// console.log(sumResult);

/* repeat ES5 Version */

let repeat = 5;
let strings = "abc ";
let repeatReslut = Array(repeat + 1).join(strings);
// console.log(repeatReslut);
