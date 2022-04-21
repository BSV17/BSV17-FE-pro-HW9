function sum() {
    let result = 0;

    return function(num) {
       return result += num;
    }
}

const total = sum();

console.log(total(3));
console.log(total(5));
console.log(total(20));
