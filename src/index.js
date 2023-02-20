module.exports = function check(str, bracketsConfig) {
  // create bracketsMap
  const bracketsMap = {};
  for (let key of bracketsConfig) {
    bracketsMap[key[0]] = key[1];
  }

  const stack = [];
  for (let elem of str) {
    if (elem in bracketsMap) {
      // opening bracket
      if (stack[stack.length - 1] === elem) {
        stack.pop();
      } else {
        stack.push(bracketsMap[elem])
      }
    } else if (stack[stack.length - 1] === elem) {
      // closing bracket pair
      stack.pop();
    } else {
      // closing bracket without pair
      return false;
    }
  }

  return !stack.length;
}
