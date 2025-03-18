//[1,[2,3]]
function a(arr) {
  let res = []
  if (!arr || arr.length === 0) {
    return res
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res.push(...a(arr[i]))
      } else {
        res.push(arr[i])
      }
    }
    return res
  }
}
// console.log(a([1, [2, 3, [4, 5]]])) // [1, 2, 3, 4, 5]
console.log([1, [2, 3, [4, 5]]].flat(Infinity))

// [1, [2, 3, [4, 5]]].
