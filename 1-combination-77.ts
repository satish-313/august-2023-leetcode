function combine(n: number, k: number): number[][] {
    const ans: number[][] = [];

    function backTrack(com: number[], idx: number) {
        if (com.length > k) return;

        if (com.length === k) {
            ans.push([...com]);
            return;
        }

        for (let i = idx; i <= n; i++) {
            com.push(i);
            backTrack(com, i + 1);
            com.pop();
        }
    }

    backTrack([], 1);

    return ans;
}

console.log(combine(4, 2));
console.log(combine(1,1))