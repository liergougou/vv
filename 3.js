function a(str) {
  let len = str.length
  let res = []
  let maxLength = 0
  let somelength = 0
  for (let i = 0; i < len; i++) {
    if (str[i] === '(') {
      res.push(')')
    }
    if (str[i] === ')') {
      if (res.length === 0) {
        if (somelength > maxLength) {
          maxLength = somelength
        }
        somelength = 0
        res.push('(')
      } else if (res[res.length - 1] == '(') {
        res.push('(')
      } else {
        res.pop()
        somelength = somelength + 1
      }
    }
    if (somelength > maxLength) {
      maxLength = somelength
    }
  }
  console.log(maxLength)
}
a('(（))(()()()）)')
