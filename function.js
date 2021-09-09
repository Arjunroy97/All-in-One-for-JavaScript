console.clear();

/*** Function ***/

function funcName(a, b) {
  // function parameter
  console.log(a + b);
}

// funcName(2, 4); // function invoking

const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    sum += val[i];
  }
  //   console.log(sum);
  return sum;
}
// sumArr(arr);
const result = sumArr(arr);
const result2 = sumArr(arr2);
const result3 = sumArr(arr3);
// console.log(result);
// console.log(result2);
// console.log(result3);

/* Function Arguments use */
function sumArguments() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const resultArguments = sumArguments(1, 2, 3, 4, 5, 6);
// console.log(resultArguments);

/*** Function Expression ***/

const funcExpression = function (a, b) {
  return a + b;
};

const funcResult = funcExpression;
// console.log(funcResult(3, 2));

// console.log(funcExpression(2, 3));

/** Inner Function **/

function fullName(grating, name) {
  function sayName() {
    if (name) {
      return name.split(" ")[1];
    }
  }

  const message = grating + " " + sayName();
  return message;
}

const innerFuncResult = fullName("Good Evening", "Arjun Singh");

// console.log(innerFuncResult);

/*** Function Scoping ***/

var a = 55; /// Global variable or scop

if (true) {
  if (true) {
    // console.log(a); // access global variable
  }
}

function c() {
  function b() {
    var a = 60;
    // console.log(a);
  }
  b();
  //   console.log(a);
}
c();

/****   Function Progamming           ****/
