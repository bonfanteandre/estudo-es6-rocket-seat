const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(arr);
console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

const pairs = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(pairs);

const numberThree = arr.find(function(item) {
    return item === 3;
});

console.log(numberThree);
