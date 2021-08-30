class NumeroComplexo{

 constructor(a, b){
    this.a = a
    this.b =b
 }

 getA(){
   return a;
 }
setA(){
  this.a = a;
}

getB(){
  return b;
}
setB(){
  this.b = b;
}

inicializaNumero(a,b){
  this.a = a
  this.b = b
}

imprimeNumero(){
  console.log(this.a + " + " + this.b + "i")
}

eIgual( c){
  return (this.a == c.getA()) && (this.b == c.getB())
}
 
soma( c){
  this.a = (this.a + c.getA())
  this.b = (this.b + c.getB())
}

subtrai(NumeroComplexo, c){
  this.a = this.a - c.getA();
  this.b = this.b - c.getB()
}

multiplicar (c){
  this.a = ((this.a*c.getA() + this.b*c.getB()))
  this.b = ((this.b*c.getA() + this.a*c.getB()))
  }

  dividir(c){
    this.a = ((this.a*c.getA() + this.b*c.getB()) / (Math.pow(c.getA(), 2)) + (Math.pow(c.getB(), 2)));
  this.b = ((this.b*c.getA() + this.a*c.getB()) / (Math.pow(c.getA(), 2)) + (Math.pow(c.getB(), 2)));
  
  }

  modulo(){
    return Math.sqrt(this.a*this.a + this.b*this.b)
  }


}

let a = new NumeroComplexo(2, 5)
    let b = new NumeroComplexo(3)
    let c = new NumeroComplexo(3, 3)

    a.imprimeNumero();

    a.soma(b);
    b.multiplicar(a);
    c.dividir(a);
    a.imprimeNumero();
    b.imprimeNumero();
    c.imprimeNumero();
    
    console.log("Modulo de a: " + a.modulo());
