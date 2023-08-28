class MyStack {
    arr:number[];
    
    constructor() {
        this.arr =  new Array<number>();
    };

    push(x:number):void {
        this.arr.push(x);
    };

    pop():number {
        return this.arr.pop()!;
    };

    top():number {
        return this.arr[this.arr.length-1];
    }

    empty():boolean {
        return this.arr.length === 0;
    }
}
