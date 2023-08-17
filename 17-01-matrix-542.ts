function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length - 1;
    const n = mat[0].length - 1;
    const dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const set = new Set<string>();
    let queue: [number, number][] = [];

    function checkAdj(r: number, c: number): boolean {
        for (let [x, y] of dir) {
            let rx = r + x;
            let cy = c + y;
            if (rx < 0 || cy < 0 || rx > m || cy > n) continue;
            if (mat[rx][cy] === 0) return true;
        }
        return false;
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (mat[i][j] === 1 && checkAdj(i, j)) {
                queue.push([i, j]);
                set.add(`${i},${j}`);
            }
        }
    }
    let count = 1;

    while (queue.length > 0) {
        let len = queue.length;

        for (let k = 0; k < len; k++) {
            let [r, c] = queue[k];
            mat[r][c] = count;

            for (let [x, y] of dir) {
                let rx = r + x;
                let cy = c + y;

                if (
                    rx < 0 ||
                    cy < 0 ||
                    rx > m ||
                    cy > n ||
                    set.has(`${rx},${cy}`) ||
                    mat[rx][cy] === 0
                )
                    continue;

                set.add(`${rx},${cy}`);
                queue.push([rx, cy]);
            }
        }

        count += 1;
        console.log("before ", queue);
        queue = queue.slice(len);
        console.log("after ", queue);
    }

    return mat;
}

console.log(
    updateMatrix([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ])
);
// console.log(
//     updateMatrix([
//         [0, 0, 0],
//         [0, 1, 0],
//         [1, 1, 1],
//     ])
// );
// console.log(
//     updateMatrix([
//         [0, 0, 0],
//         [0, 1, 0],
//         [0, 0, 0],
//     ])
// );
