function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const ans: string[] = [];
    const map = new Map<string, string[]>([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]],
    ]);

    function recursion(idx:number,com:string[]) {
        if (com.length > digits.length) return;
        if (com.length === digits.length) {
            ans.push(com.join(""));
            return;
        }

        for (let char of map.get(digits[idx])!) {
            com.push(char);
            recursion(idx+1,com);
            com.pop()
        }

    }

    recursion(0,[])
    return ans;
}

console.log(letterCombinations("2"));
