Promise.all([ 
  new Promise(function (resolve, reject) {
  resolve(true);
 }),
 
 new Promise(function (resolve, reject) {
   setTimeout(function () { 
       resolve(true) 
   }, 3000);
 }),
  new Promise(function (resolve, reject) {
   return reject('Falhou');
 })]).then((values) => {
  console.log(values)
}).catch((err)=> {
  console.log(err)
})
 