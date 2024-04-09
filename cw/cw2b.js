/*
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    Return your answer as a number.

    INPUT: an array of numbers and strings
    OUTPUT: sum of all the elements regardless of their data type
*/

const sumMix = (arr) => {
    return arr.reduce((sum, current) => sum + Number(current), 0);
}

  // TESTS:
  // console.log(sumMix([1, '3'])); // 4
  // console.log(sumMix([10, '12', 20])) // 42