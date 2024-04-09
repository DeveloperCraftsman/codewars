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
    
    // create a newArr empty array
    // iterate over the friends array with a for .. of loop
        // if the value of index i in the array has a length that is strictly equal to 4
            // then push the value at index i into the newArr
    // return newArr
    
    let newArr = [];
    for(element of arr){
        if(element.length === 4){
            newArr.push(element);
        }
    }
    return newArr;
}

// console.log(friend['John', 'Alex', 'Spencer']); // ['John', 'Alex'];