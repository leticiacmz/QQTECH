class Contador {
  // classe
  constructor() {
    this.valor = 0;
  }

  zerarValor() {
    // metodos dentro do objeto
    return (this.valor = 0);
  }

  incrementarValor() {
    return (this.valor = this.valor + 1);
  }

  obterValor() {
    return this.valor;
  }
}

function main() {
  let c1 = new Contador();
  console.log("C1: " + c1.obterValor());
  c1.incrementarValor();
  c1.incrementarValor();
  console.log("C1: " + c1.obterValor());

  let c2 = new Contador();
  console.log("C2: " + c2.obterValor());
  c2.incrementarValor();
  c2.incrementarValor();
  console.log("C2: " + c2.obterValor());

  c1.incrementarValor();
  c1.incrementarValor();
  console.log("C1: " + c1.obterValor());
  console.log("C2: " + c2.obterValor());

  let c3 = new Contador();
  console.log("C1: " + c1.obterValor());
  console.log("C2: " + c2.obterValor());
  console.log("C3: " + c3.obterValor());

  c3.incrementarValor();
  c1.incrementarValor();
  c2.zerarValor();
  console.log("C1: " + c1.obterValor());
  console.log("C2: " + c2.obterValor());
  console.log("C3: " + c3.obterValor());
}

main();
