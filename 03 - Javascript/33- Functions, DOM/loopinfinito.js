let a = 10
 
while(a != 0) {
    executarRegra()
}
 
function diminui() {
    a--
}
 
function soma() {
    a++
}
 
function executarRegra(a) {
    a > 0 ? diminui() : soma()
 
}
 
console.log(a)
