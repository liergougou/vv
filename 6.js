function a(str) {
  let res = []
  if (str.length % 2 !== 0) {
    console.log('false')
    return
  }
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        res.push('(')
        break
      case ')':
        if (res.length === 0) {
          console.log('false')
          return
        } else if (res[res.length - 1] === '(') {
          res.pop()
          break
        } else {
          console.log('false')
          return
        }
      case '[':
        res.push('[')
        break
      case ']':
        if (res.length === 0) {
          console.log('false')
          return
        } else if (res[res.length - 1] === '[') {
          res.pop()
          break
        } else {
          console.log('false')
          return
        }

      case '{':
        res.push('{')
        break
      case '}':
        if (res.length === 0) {
          console.log('false')
          return
        } else if (res[res.length - 1] === '{') {
          res.pop()
          break
        } else {
          console.log('false')
          return
        }
    }
  }
  if (res.length === 0) {
    console.log('true')
  } else {
    console.log('false')
  }
}

// a('()')
a('(]')
a('{[]}')
a('([)]')
a(']()[')
