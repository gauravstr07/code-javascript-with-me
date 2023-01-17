let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num);

let num_more = [8, 9, 10, 11, 12, 13, 14];

let forsort = [2, , 3, 1, 4, 6, 5, 7];

// delete num[0]  // delete removing the element of an array which you want, but can not delete lenght of an array, it will be constant
//console.log(num);

/** concat method adding 2 arrays into one array similar like join */
//let newArray = num.concat(num_more);
//console.log(newArray);

/** sort method used to sort array to alphabetically */
// let compare = (a, b) => {
//   return b - a;
// };

// let sort = forsort.sort(compare);
//console.log(forsort);

/** reverce method reversing to to the array */
// let reverce = forsort.reverse();
//console.log(forsort);

/** Splice and Slice */

/** Splice can be used to add new items to an array */
//let splice = num.splice(0, 3, 20, 30, 40);
//console.log(num);

/** Slice out a piece from an arry it create a new array */
let slice = num.slice(1);
console.log(slice);


