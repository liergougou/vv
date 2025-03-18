//num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
function a(arr) {
  let sarr = []
  let maxsum = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum = 0
    for (let j = i; j < arr.length; j++) {
      sum += arr[j]
      if (sum > maxsum) {
        maxsum = sum
        sarr = arr.slice(i, j + 1)
      }
    }
  }
  console.log(sarr)
  console.log(maxsum)
}

a([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // [4, -1, 2, 1]
