/*
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    Return your answer as a number.

    INPUT: an array of numbers and strings
    OUTPUT: sum of all the elements regardless of their data type
*/

  // declare and initialize a variable sum to keep count
  // iterate through the array with a for .. of loop
    // convert the element to number data type
    // reassign sum to the expression sum plus the value of the element
  // return sum

  function sumMix(arr){
    let sum = 0;
    for(const element of arr){
        sum += Number(element);
    }
    return sum;
  };

  // TESTS:
  // console.log(sumMix([1, '3'])); // 4
  // console.log(sumMix([10, '12', 20])) // 42