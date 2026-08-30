class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s: string): boolean {
    const chars = s.split("");
    const stack = [];
    for (let i = 0; i < chars.length; i++) {
      let c = chars[i];
      if ("({[".includes(c)) stack.push(c);
      else if (")}]".includes(c)) {
        if (stack.length == 0) return false;
        let top = stack.pop();
        if ((top === "(" && c !== ")") || 
            (top === "{" && c !== "}") || 
            (top === "[" && c !== "]"))
          return false;
      } else {
        continue;
      }
    }

    return stack.length == 0;
  }
}
