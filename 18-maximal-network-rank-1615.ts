function maximalNetworkRank(n: number, roads: [number, number][]): number {
    let maxRank = 0;
    let map = new Array(n).fill(0);
    let con: boolean[][] = new Array(n)
        .fill(null)
        .map(() => new Array(n).fill(false));

    for (let [a, b] of roads) {
        map[a]++;
        map[b]++;
        con[a][b] = true;
        con[b][a] = true;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (con[i][j] || con[j][i])
                maxRank = Math.max(maxRank, map[i] + map[j] - 1);
            else maxRank = Math.max(maxRank, map[i] + map[j]);
        }
    }
    return maxRank;
}

console.log(
    maximalNetworkRank(4, [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3],
    ])
);
function maximalNetworkRank1(n: number, raods: [number, number][]): number {
    let maxRank = 0;
    let map = new Map<number, number[]>();

    for (let i = 0; i < n; i++) map.set(i, []);

    for (let [a, b] of raods) {
        let aArr = map.get(a)!;
        let bArr = map.get(b)!;

        aArr.push(b);
        bArr.push(a);
    }

    for (let i = 0; i < n; i++) {
        let a = map.get(i)!;
        for (let j = i + 1; j < n; j++) {
            let b = map.get(j)!;
            if (a.includes(j))
                maxRank = Math.max(maxRank, a.length + b.length - 1);
            else maxRank = Math.max(maxRank, a.length + b.length);
        }
    }

    return maxRank;
}
