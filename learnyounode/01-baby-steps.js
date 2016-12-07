'use strict';

let sum = 0;
const getSum = function(array) {
for (let i = 2; i < array.length; i++) {
  sum = sum + array[i];
}
return sum;
};

console.log(process.argv, getSum(process.argv));
