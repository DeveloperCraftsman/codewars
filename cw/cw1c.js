/* 
    Create a function that filters a list of strings and returns a list
    with only your friends names it it. If a name has exactly 4 letters in it
    you can be sure that it has to be a friend of yours.

    EX:
    friends ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]
*/

function friend(arr){
    // input: array of elements with various lengths which are of string type ['Mark', 'Spencer']
    // output: array of elements with exactly 4 letters in it ['Mark', 'John']

    // use the array filter method on each element to see if the element length is strictly equal to 4
    // return list of elements if the element passes the test

    return arr.filter((element) => element.length === 4);
}

// console.log(friend['John', 'Alex', 'Spencer']); // ['John', 'Alex'];