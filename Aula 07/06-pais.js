/*6) Escreva uma classe que represente um país. Um país é representado através dos
atributos: código ISO 3166-1 (ex.: BRA), nome (ex.: Brasil), população (ex.:
193.946.886) e a sua dimensão em Km2 (ex.: 8.515.767,049). Além disso, cada país
Paradigmas 2 3
mantém uma lista de outros países com os quais ele faz fronteira. Escreva a classe e
forneça os seus membros a seguir:
a) Construtor que inicialize o código ISO, o nome e a dimensão do país;
b) Métodos de acesso (getter/setter) para as propriedades código ISSO, nome,
população e dimensão do país;
c) Um método que permita verificar se dois objetos representam o mesmo país
(igualdade semântica). Dois países são iguais se tiverem o mesmo código ISO;
d) Um método que informe se outro país é limítrofe do país que
recebeu a mensagem;
e) Um método que retorne a densidade populacional do país;
f) Um método que receba um país como parâmetro e retorne a lista de vizinhos comuns
aos dois países. Considere que um país tem no máximo 40 outros países com os quais
ele
faz fronteira.*/

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