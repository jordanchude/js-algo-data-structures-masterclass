// LINEAR SEARCH
// Psuedocode
// FUNCTION accepts array and value 
//     LOOP through array
//         IF current array element is equal to value
//             RETURN array element index
//         ENDIF
//     ENDLOOP
//     RETURN -1
// ENDFUNCTION

// Example
function linearSearch(array, value){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    }
    return -1;
  }

// linear search test cases
console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([1, 2, 3, 4, 5], 6));

// Big O notation: O(n)