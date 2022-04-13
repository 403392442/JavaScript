let str = 'aaabbaaab';
let result = '';
let count = 0;

for (let i = 0; i < str.length; i++) {
    if(str.charAt(i) === str.charAt(i+1)) {
        count++;
    } else {
        count++;
        console.log(str.charAt(i));
        console.log(count);
        result = result.concat(str.charAt(i) + count);
        count = 0;
    }
}

console.log(result);