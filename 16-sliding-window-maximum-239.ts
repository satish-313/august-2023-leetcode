function maxSlidingWindow(nums: number[], k: number): number[] {
    const ans: number[] = [];

    let max = 0;

    for (let i = 0; i < k; i++) {
        max = Math.max(nums[i], max);
    }

    ans.push(max);

    for (let i = k; i < nums.length; i++) {
        max = nums[i];
        for (let j = i - k + 1; j <= i; j++) {
            max = Math.max(max, nums[j]);
        }

        ans.push(max);
    }

    return ans;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
