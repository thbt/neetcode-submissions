class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board: string[][]): boolean {
    const rows = new Map<number, Set<string>>([
      [0, new Set()],
      [1, new Set()],
      [2, new Set()],
      [3, new Set()],
      [4, new Set()],
      [5, new Set()],
      [6, new Set()],
      [7, new Set()],
      [8, new Set()],
    ]);
    const cols = new Map<number, Set<string>>([
      [0, new Set()],
      [1, new Set()],
      [2, new Set()],
      [3, new Set()],
      [4, new Set()],
      [5, new Set()],
      [6, new Set()],
      [7, new Set()],
      [8, new Set()],
    ]);
    const squares = new Map<string, Set<string>>([
      ["00", new Set()],
      ["01", new Set()],
      ["02", new Set()],
      ["10", new Set()],
      ["11", new Set()],
      ["12", new Set()],
      ["20", new Set()],
      ["21", new Set()],
      ["22", new Set()],
    ]);

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const v = board[r][c];
        if (v === ".") continue;

        const squareKey = "" + Math.floor(r / 3) + Math.floor(c / 3);

        if (
          rows.get(r).has(v) ||
          cols.get(c).has(v) ||
          squares.get(squareKey).has(v)
        ) {
          return false;
        }

        rows.get(r).add(v);
        cols.get(c).add(v);
        squares.get(squareKey).add(board[r][c]);
      }
    }
    return true;
  }
}
