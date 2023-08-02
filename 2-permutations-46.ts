function permute(nums: number[]): number[][] {
    let ans: number[][] = [];
    let set = new Set<number>();

    function recursion(com: number[]) {
        if (com.length > nums.length) return;
        if (com.length === nums.length) {
            ans.push([...com]);
            return;
        }

        for (let num of nums) {
            if (set.has(num)) continue;
            com.push(num);
            set.add(num);
            recursion(com);
            com.pop();
            set.delete(num)
        }
    }

    recursion([]);
    return ans;
}

console.log(permute([1, 2, 3]));
