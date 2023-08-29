function bestClosingTime(customers: string): number {
    let dp = new Array<number>(customers.length).fill(0);
    let countN = 0;
    let countY = 0;

    for (let i = customers.length - 1; i >= 0; i--) {
        if (customers[i] === "Y") {
            countY += 1;
            dp[i] += countY;
        } else dp[i] = countY;
    }
    console.log(dp)
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === "N") {
            dp[i] = countN + dp[i];
            countN += 1;
        } else dp[i] += countN;
    }
    console.log(dp)
    if (countN === customers.length) return 0;
    if (countY === customers.length) return countY;

    let ans = 0;
    let min = Infinity;

    for (let i = 0; i < dp.length; i++) {
        if (min > dp[i]) {
            min = dp[i];
            ans = i;
        }
    }

    if (min > countN) return dp.length

    return ans;
}

console.log(bestClosingTime("NNNNY"))
// console.log(bestClosingTime("YYNY"));
// console.log(bestClosingTime("NNNNN"));
// console.log(bestClosingTime("YYYY"));
// console.log(bestClosingTime("YN"));
