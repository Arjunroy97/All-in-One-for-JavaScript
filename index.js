/// Finding an Object Class


function sum(...arguments) {
  if (arguments.length === 1) {
    const [fristArr] = arguments
    if (fristArr instanceof Array) {
      return sum(...fristArr)
    }
  }
  return arguments.reduce((a,b)=> a + b)
}

console.log(sum(1))
console.log(sum([1,2,3,4,5]))
console.log(sum(4,2))
