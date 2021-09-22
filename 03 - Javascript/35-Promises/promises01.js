let promise1 = new Promise(function (resolve, reject) {
  resolve(true);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(true);
  }, 3000);
});

let promise3 = new Promise(function (resolve, reject) {
  return resolve("Sucesso");
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
  console.log(promise3)
}).catch((err) => {
  console.log(err)
})
