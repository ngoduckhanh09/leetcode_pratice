/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let currN = head
    let temp = null
    while (currN != null && currN.next != null) {
        if (currN.val == currN.next.val) {
            temp = currN.next.next
            currN.next = temp
        } else {
            currN = currN.next
        }
    }
    return head
};
