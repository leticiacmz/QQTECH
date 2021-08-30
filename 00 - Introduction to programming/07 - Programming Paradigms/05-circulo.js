class Circulo{
constructor(raio = 0, x=0, y=0){
  this.raio = raio;
  this.x = x;
  this.y = y;
}

inflar(raio){
  return raio++
}

desinflar(raio){
  return raio--
}
mover(){
  x=x1
  y=y1
}

area(){
  area = 3.14* (raio*raio)
  return area;
}

 
   
 }
  
 let circulo1 = new Circulo(0)
 circulo1.raio(5)
circulo1.x(2)
circulo1.y(4)
circulo1.mover()
circulo1.inflar()
circulo1.desinflar()