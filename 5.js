function a(str) {
  let len = str.length
  let maxLength = 0
  let stack = [-1]
  for (let i = 0; i < len; i++) {
    if (str[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        maxLength = maxLength > i - stack[stack.length - 1] ? maxLength : i - stack[stack.length - 1]
      }
    }
  }
}
