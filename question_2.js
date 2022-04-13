let a = [1, 2, 3, 4];
let b = [3, 4];

let result = [];
result = a.filter(num => {
    return b.indexOf(num) === -1
})
console.log(result)