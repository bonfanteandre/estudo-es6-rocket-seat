const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arr.map((item, index) => item + index);

console.log(newArr);

const pairs = arr.filter(item => item % 2 === 0);

console.log(pairs);
