const a = "1";
const b = 1;

//Resposta 3.1 = Cai no IF pois apesar de tipos diferentes o seu valor é o mesmo
// if (a == b) {
//   console.log("cai aqui no IF?");
// } else {
//   console.log("ou cai aqui no ELSE?");
// }

//Resposta 3.2 = fazendo comparação atraves do seu tipo, cai no else

if (a == typeof b) {
  console.log("cai aqui no IF?");
} else {
  console.log("ou cai aqui no ELSE?");
}
