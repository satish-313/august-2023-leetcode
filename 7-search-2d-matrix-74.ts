function searchMatrix(matrix: number[][], target: number): boolean {
    let row = -1;
    let col = matrix[0].length - 1;
    let l = 0;
    let r = matrix.length - 1;

    while(l<=r) {
        let mid = (l+r) >> 1;
        if (matrix[mid][0] <= target && matrix[mid][col] >= target) {
            row = mid;
            break;
        } else if (matrix[mid][0] > target) {
            r = mid - 1;
        } else l = mid + 1;
    }
    if (row === -1) return false;

    l = 0;
    r = col;

    while(l<=r) {
        let mid = (l+r) >> 1;
        if (matrix[row][mid] === target) return true;
        else if (matrix[row][mid] > target) r = mid - 1;
        else l = mid + 1;
    }


    return false
};
