/** create a new array by programming some operation on each array element */
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

 let a = arr.map((value, index, array) => {
   console.log(value, index, array);
   return value + index;
 });

console.log(a);
*/

// Array Filter method
/*
let arr2 = [10, 20, 30, 40, 50];
let result = arr2.filter((value) => {
  return value > 30;
});
console.log(result);
*/

// Array Reduce method
let arr3 = [5, 10, 15, 20, 25, 30];

let newArr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(newArr3);