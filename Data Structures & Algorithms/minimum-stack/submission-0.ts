class MinStack {
    
    constructor(
        private items = [],
        private mins = []) {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.items.push(val);
        this.mins.push(this.mins.length === 0 ? val : Math.min(val, this.mins.at(-1)));
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.items.pop();
        this.mins.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.items.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.mins.at(-1);
    }
}
