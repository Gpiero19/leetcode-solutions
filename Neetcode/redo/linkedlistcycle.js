function hasCycle(head) {
    let current = head
    let seen = new Set()

    while (current) {
        if (seen.has(current)) {
            return true
        }
        seen.add(current)
        current = current.next
    }
    return false
}

