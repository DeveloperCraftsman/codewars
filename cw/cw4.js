/*
    Write a program that finds the summation of every number 
    from 1 to num. 

    The number will always be a positive integer greater than 0. 
    The function only needs to return the result.

    INPUT   |   OUTPUT
    2       |    3 (1 + 2)
    8       |    36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

function summation(num){
    // declare a variable sum and initialize it to 0
    // iterate with a for loop; (1) declare a counter variable i and
    // initialize it to 1; (2) conditional statement i <= num (inclusive);
    // (3) increment i by 1;
        // reassign sum to the expression sum + i
    // return sum
    let sum = 0;
    for(let i = 0; i <= sum; i++){
        sum += i;
    }
    return sum;
}

// TESTS:
// console.log(summation(3)) // 6
// console.log(summation(10)) // 55