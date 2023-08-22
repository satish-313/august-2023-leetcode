function convertToTitle(columnNumber: number): string {
    let ans: string[] = [];

    while (columnNumber) {
        let last = columnNumber % 26;
        console.log(columnNumber, last);

        if (last === 0) {
            ans.push(String.fromCharCode(64 + 26));
        } else ans.push(String.fromCharCode(last + 64));
        columnNumber -= last === 0 ? 26 : last;
        console.log("after ", columnNumber);
        columnNumber = columnNumber / 26;
        console.log(ans);
    }

    return ans.reverse().join("");
}

console.log(convertToTitle(12345678));

function bconvertToTitle(columnNumber: number): string {
    let ans:string = ""

    while(columnNumber) {
        let char = (columnNumber-1) % 26;
        ans = String.fromCharCode(65+char)+ans;
        columnNumber = Math.floor((columnNumber-char)/26)
    }

    return ans
};