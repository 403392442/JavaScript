function add(num1, num2) {
    return num1 + num2;
}

function add1(num1) {
    return add2;
    function add2(num2) {
        return num1 + num2
    }
}

console.log(add(2, 5))
console.log(add1(2)(5))