/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //delete space in first&last of string
    let s1 = s.trim()
    //using regex to remove more space in beetween
    let s2 = s1.split(/\s+/)
    return s2[s2.length - 1].length
};