// Function for combining objects with functions
// 1. takes in fns (functions) as a parameter (... notation collects all functions as an array)
// 2. returns another function (anon) that takes in initialObj as parameter
// 3. in anon1, we use the reduce function on fns
//  3a. obj is the current value accumulator
//  3b. fn is the current function
//  3c. we apply fn on the obj

export const compose = (...fns) => (initialObj) =>
  fns.reduce((obj, fn) => fn(obj), initialObj);