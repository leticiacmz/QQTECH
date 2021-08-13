/*Escreva uma classe Ponto2D que represente um ponto no plano cartesiano. Além
dos atributos por você identificados, a classe deve oferecer os seguintes membros:

a) Construtores sobrecarregados que permitam a inicialização do ponto:
i) Por default (sem parâmetros) na origem do espaço 2D;
ii) Num local indicado por dois parâmetros do tipo double (indicando o valor de abcissa
e ordenada do ponto que está sendo criado);
iii) Em um local indicado por outro ponto.

b) Métodos de acesso (getter/setter) dos atributos do ponto;

c) Métodos sobrecarregados de movimentação do ponto com os mesmos parâmetros
indicados para os construtores;

d) Método de comparação semântica do ponto (equals); OK

e) Método de representação do objeto como String; ok

f) Método que permita calcular a distância do ponto que recebe a mensagem, para
outro ponto;

g) Método que permita a criação de um novo ponto no mesmo local do ponto que
recebeu a mensagem (clone);*/

class Ponto2D {
  // declaração da classe
  constructor(x=0, y=0) {
    this.x = x
    this.y = y

    // as coordenadas do ponto no espaço 
  }
    
  igual(Ponto2D) {
    if (this.x == Ponto2D.x && this.y == Ponto2D.y) {// se o  ponto é igual, retorna true
      // se as coordenadas verticais forem iguais então
      
      return true;
    } 
    else {
      
      return false;
    } // o ponto é diferente, retorna false
  }

  calcularDistancia(pontoDois){ // pontoDois é o class Ponto2D DESTINO
    var a = pontoDois.x - this.x; // variável a é igual a distancia X destino menos o X origem 
    var b = pontoDois.y - this.y; // variável b é igual a distancia Y destino menos o Y origem 
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log("A distancia entre os pontos é de:  "+c);
    return c;
  }

  clonar(pontoDois){
    this.x = pontoDois.x;
    this.y = pontoDois.y;
  }

  toString() {
    let resultado;
    resultado = "x: "+this.x+", y: "+this.y; // concatena/junta o x e o y com o this (instancia) numa string
    return resultado;
  }
  
} 

function main() {
  let p1 = new Ponto2D(8,3);
  let p2 = new Ponto2D(2,3);
  let p3 = new Ponto2D(4,5);
  let p4 = new Ponto2D();

  p1.igual(p2)
  p2.igual(p3)
  p1.toString()
  p1.calcularDistancia(p2);
  p1.calcularDistancia(p3);

  console.log("antes o p4 era "+p4);
  p4.clonar(p1);
  console.log("agora o p4 eh "+p4);

  console.log("As coordenadas de P1 são " + p1); 


  console.log("As coordenadas de P2 são " + p2); 
  
  p1.clonar(p4); // clona (copia) e retorna uma nova instância
  console.log("As coordenadas de P3 são " + p3); 
  console.log("As coordenadas de P4 são " + p4);
  // são iguais aos outros ?
  console.log("P1 está na mesma posição de P2 ? " + p1.igual(p2));
  console.log("P1 está na mesma posição de P3 ? " + p1.igual(p3)); 
  console.log("P1 está na mesma posição de P4 ? " + p1.igual(p4)); 
  console.log("P2 está na mesma posição de P4 ? " + p2.igual(p4)); 
  
  
}

main();

