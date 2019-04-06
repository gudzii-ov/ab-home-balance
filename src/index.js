export default (string) => {
  const stack = [];
  const open = ['(', '[', '{', '<'];
  const close = [')', ']', '}', '>'];

  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };

  for (let i = 0; i < string.length; i += 1) {
    const currSymbol = string[i];

    if (open.includes(currSymbol)) {
      stack.push(currSymbol);
    } else if (close.includes(currSymbol)) {
      if (stack.length === 0) {
        return false;
      }
      const lastBracket = stack.pop();
      if (bracketPairs[currSymbol] !== lastBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};