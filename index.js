let num = [5, 10, 15, 20, 25, 50];

let b = num.toString(); // b is now string
//console.log(b);

let c = num.join("_"); // join 2 array
//console.log(c);

let pop = num.pop(); // pop used for removing last elememt of an array
//console.log(num, pop);

let push = num.push(56); // adding element to the last index
//console.log(num, push);

let shift = num.shift(); // removing first element of an array
//console.log(num, shift);

let unShift = num.unshift("Gau"); // adding element to the first index of an array
console.log(num, unShift);
