Promise.myall = function (promises) {
  const results = []
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then(res => {
          results[index] = res
          if (results.length === promises.length) {
            resolve(results)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  })
}
