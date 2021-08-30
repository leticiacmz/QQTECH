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

  toString() {
    let resultado;
    resultado = "x: "+this.x+", y: "+this.y; // concatena/junta o x e o y com o this (instancia) numa string
    return resultado;
  }
  
} 

class Reta{
constructor(a,b){
  this.a = a 
  this.b = b
}

  retas(x, y){
    a = (p1.y - p2.y) / (p2.x - p1.x)
    b = (p1.xx * p2.y) - p2.x * p1.y / (p2.x - p1.x) 
  }

  pertence(a, b){
    if(a * Ponto2D.x + b == Ponto2D.y) {
      true;
    } else return false;
  }

string(a, b){
  
  if(b>0){
    console.log("y = " + a + "x = " + b); 
  } else console.log("y = " + a + "x = " + b)
 

}

//intersecao( a, b){
    
 // x((Reta.b - b) / (a-Reta.a))
 //// y(a.x + b)
  
//}

}

function main() {
  let p1 = new Ponto2D(8,3);
  let p2 = new Ponto2D(2,3);
  let p3 = new Ponto2D(4,5);
  let p4 = new Ponto2D();
let r1 = new Reta(6, 4);
let r2 = new Reta(p1, p2)

r1.string()
r2.string()

r1.pertence(p3)
r2.pertence(p4)

//r1.intersecao(r2)
return 0;
}

main();

