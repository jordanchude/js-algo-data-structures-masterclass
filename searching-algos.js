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
// function linearSearch(array, value){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i
//         }
//     }
//     return -1;
//   }

// linear search test cases
// console.log(linearSearch([10, 15, 20, 25, 30], 15));
// console.log(linearSearch([1, 2, 3, 4, 5], 6));

// Big O notation: O(n)
// Linear search Big O: O(1) (best), O(n) (average), O(n) (worst)

// BINARY SEARCH
// Psuedocode
// FUNCTION accepts sorted array and value 
//     VARIABLE left equals 0
//     VARIABLE right equals end of array

//     WHILE left is bigger than right
//         VARIABLE middle equals middle index
//             IF value is middle
//                 RETURN middle
//             ELSEIF value is smaller than middle
//                 right equals middle
//             ELSEIF value is larger than middle 
//                 left equals middle
//             ENDIF
//     ENDWHILE
//     RETURN -1
// ENDFUNCTION

// Example
// function binarySearch(arr, val){
//     var start = 0;
//     var end = arr.length - 1;

//     while (start < end) {
//         var middle = Math.floor((start + end) / 2)
//         if (arr[middle] === val) {
//             return middle;
//         } else if (val < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return -1;
// };

// test cases
// console.log(binarySearch([1, 2, 3, 4, 5], 2))
// console.log(binarySearch([1, 2, 3, 4, 5], 3))
// console.log(binarySearch([1, 2, 3, 4, 5], 6))
// console.log(binarySearch([1, 2, 3, 4, 5], 1))