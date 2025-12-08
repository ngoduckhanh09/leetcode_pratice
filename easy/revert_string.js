/**
 * @param {character[]} s
 * @return {void}
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // swap
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]
