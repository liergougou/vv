function longestValidParentheses(s) {
  let maxLength = 0
  let stack = [-1] // 初始化栈，放入-1作为基准

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i) // 将'('的索引压入栈
    } else {
      stack.pop() // 将最近的'('索引弹出
      if (stack.length === 0) {
        stack.push(i) // 如果栈为空，放入当前')'的索引作为基准
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]) // 计算有效括号长度
      }
    }
  }

  return maxLength
}

console.log(longestValidParentheses('(())))(()())')) // 输出: 6
