function charCount(str) {
    // create hash table
    var obj = {};
    // loop through characters of string
    for (var char of str) {
        // make character lowercase
        char = char.toLowerCase();
        // if character is an alphanumeric
        if (/[a-z0-9]/.test(char)) {
            // add one obj[char] or assign it to 1
            obj[char] = ++obj[char] || 1
        }
    }
}