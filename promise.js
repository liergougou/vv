let a = 0
const p1 = new Promise((resolve, reject) => {
  console.log(1)
  setTimeout(() => reject('wwww'), 7000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 4
    console.log(a)
    resolve(p1)
  }, 5000)
})
p2.then(res => {
  console.log(2)
  console.log('he')
}).catch(error => {
  console.log(error)
})
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => console.log(result)).catch(error => console.log(error))
