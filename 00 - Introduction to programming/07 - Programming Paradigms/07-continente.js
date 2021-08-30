class Pais {
  constructor(codigoISO, nome, populacao, dimensao, densidade, fronteiras){
      this.codigoISO = codigoISO
      this.nome = nome
      this.populacao = populacao
     this.dimensao = dimensao
      this.densidade = densidade
    this.fronteiras = fronteiras
     
  }
      
}
function iguais(umpais, outropais){
  if (umpais.codigoISO == outropais.codigoISO){
      console.log("Mesmo país")
  } else {
      console.log("Paises diferentes")
  }
}   

function fazemFronteira(umpais, outropais){
  if(outropais.includes(umpais)){
      console.log('Os paises fazem fronteira');
   } else{ 
       console.log('Os paises não fazem fronteira') }
   }

function densidadePais(pais){
  return pais.densidade

  }





let pais1 =new Pais("BRA", "Brasil", "211.000.000,00", "8.516.000 km²", "23,8 hab./km²")   
pais1.fronteiras = ["Argentina", "Uruguai", "Bolívia", "Colômbia", "Guiana", "Paraguai", "Peru", "Suriname", "Venezuela", "França (Guiana Francesa)"]

let pais2 =new Pais ("ARG", "Argentina", "44.094.000,00", "2.780.000 km²", "16,26 hab./km²" )
pais2.fronteiras= ["Chile", "Brasil", "Bolívia", "Paraguai", "Uruguai"]

iguais(pais1, pais2)

pais1.fronteiras = pais1.fronteiras.filter(item => pais2.fronteiras.includes(item))
console.log("Fronteiras em comum: ", pais1.fronteiras)

fazemFronteira(pais1.nome, pais2.fronteiras)

console.log("A densidade do pais é de:", densidadePais(pais1))


console.log(pais1)
console.log(pais2)