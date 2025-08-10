function seachMatrix (matrix, target) {
    for ( let c = 0; c < matrix.length; c++) {
        for (let r = 0; r < matrix[c].length; r++) {
            if (matrix[c][r] == target){
                return true
            }
        }
    } return false
}