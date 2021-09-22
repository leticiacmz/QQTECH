let pessoa = null;

getDadosPessoa()
  .then((p) => {
    pessoa = p;

    calculaIdadeDias(pessoa)
      .then((newP) => {
        countLength(newP)
          .then((pFinal) => {
            console.log("Pessoa", pFinal);
          })
          .catch((e) => console.log(e.toString()));
      })
      .catch((e) => console.log(e.toString()));
  })
  .catch((e) => console.log(e.toString()));

function getDadosPessoa() {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        id: 546,
        nome: "Leticia",
        idade: 23,
        dataNasc: new Date("05/02/1998"),
        genero: "Feminino",
      });
    } catch (e) {
      reject(e);
    }
  });
}

function calculaIdadeDias(pes) {
  return new Promise((resolve, reject) => {
    try {
      pes.IdadeDias = Math.ceil(
        Math.abs(pes.dataNasc - new Date()) / (1000 * 3600 * 24)
      );
      //divide por segundos, hora, dia
      resolve(pes);
    } catch (e) {
      reject(e);
    }
  });
}

function countLength(pes) {
  return new Promise((resolve, reject) => {
    try {
      pes.QuantidadeLetras = pes.nome.length;
      resolve(pes);
    } catch (e) {
      reject(e);
    }
  });
}
