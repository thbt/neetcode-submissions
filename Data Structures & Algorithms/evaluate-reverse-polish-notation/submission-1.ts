class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        for (let i = 0; i < tokens.length; i++) {
            let t = tokens[i];
            if ("+-*/".includes(t)) {
                const b = stack.pop();
                const a = stack.pop();
                let res: number;
                switch (t) {
                    case '+': res = a + b; break;
                    case '-': res = a - b; break;
                    case '*': res = a * b; break;
                    case '/': res = Math.trunc(a / b); break;
                }
                stack.push(res);
            } else {
                stack.push(Number(t));
            }
        }
        return stack.pop();
    }
}
