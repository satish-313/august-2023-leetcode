function repeatedSubstringPattern(s: string): boolean {
    function check(sub: string): boolean {
        if (s.length % sub.length !== 0) return false;

        let j = 0;
        for (j = 0; j < s.length; j++) {
            if (sub[j % sub.length] !== s[j]) return false;
        }
        return j % sub.length === 0 ? true : false;
    }
    for (let i = 1; i < s.length; i++) {
        let sub = s.slice(0, i);

        if (check(sub)) return true;
    }
    return false;
}

// console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
