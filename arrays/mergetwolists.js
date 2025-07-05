list1 = [1,2,4], list2 = [1,3,5]

// Output: [1,1,2,3,4,5]


function mergeTwoLists(a, b) {

    if (!a) {
        return b
    } if (!b) {
        return b
    } if (a.val <= b.val) {
        a.next = this.mergeTwoLists(a.next, b)
        return a
    } else {
        b.next = this.mergeTwoLists(a, b.next)
        return b
    }
}

mergeTwoLists(list1,list2)