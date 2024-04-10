/*
    You might know some pretty large perfect squares. But what about the NEXT one? Complete the findNextSquare method that 
    finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square
    is an integer n such that sqrt(n) is also an integer.

    If the argument is itself not a perfect square then return either -1 or an empty value like None or null, 
    depending on your language. You may assume the argument is non-negative.

    INPUT   |   OUTPUT
    121         144
    626         676
    114         -1
*/

function findNextSquare(num) {
    // check if the number is a perfect square
      // declare a variable plusSquare and initialize it to the evaluated result of
      // Math.sqrt(num) plus one
      // return plusSquare times plusSquare
    // else return -1
    if(Math.sqrt(num) % 1 === 0){
      let plusSquare = Math.sqrt(num) + 1;
      return plusSquare * plusSquare;
    } else {
      return -1;
    }
};
