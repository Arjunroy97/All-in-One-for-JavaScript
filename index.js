

/* finding an Object class */

function sum(...arguments) {
    const [firstArr] = arguments;
    if (firstArr instanceof Array) {
        return sum(...firstArr);
    }
    return arguments.reduce((a,b)=> a+b)
}
const result = sum(1, 2, 3, 4);
// console.log(result)