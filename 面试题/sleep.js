function sleep(delay = 1000) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(111)
    }, delay)
  })
}
sleep(3000).then((res) => {
  console.log(res)
})
