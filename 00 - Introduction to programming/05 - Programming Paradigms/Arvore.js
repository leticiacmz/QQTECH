class Pessoa {
  nome = ''
  idade = 0
  pai = ''
  mae = ''
}

class Pai extends Pessoa {
  sexo = "Masculino"
}

class Mae extends Pessoa {
  sexo = "Feminino"
}

function main() {
  let arvGenFamilia = []
 let filhos = []
  const pai = new Pai()
  pai.nome = "Roberto"
  pai.idade = 53

  const mae = new Mae()
  mae.nome = "Lorena"
  mae.idade = 50

  const pessoa1 = new Pessoa()
  pessoa1.nome = "Brenda"
  pessoa1.idade = 24
  pessoa1.pai = pai.nome
  pessoa1.mae = mae.nome

  const pessoa2 = new Pessoa()
  pessoa2.nome = "Henrique"
  pessoa2.idade = 25
  pessoa2.pai = pai.nome
  pessoa2.mae = mae.nome

  const pessoa3 = new Pessoa()
  pessoa3.nome = "Lucas"
  pessoa3.idade = 5
  pessoa3.pai = "Leandro"
  pessoa3.mae = pessoa1.nome

  arvGenFamilia = {
    "pai": {
      "nome": pai.nome,
      "idade": pai.idade
    },
    "mae": {
      "nome": mae.nome,
      "idade": mae.idade
    }}

    filhos = {
        "nome": pessoa1.nome,
        "idade": pessoa1.idade,
        "filhos": [{
          "nome": pessoa3.nome,
          "idade": pessoa3.idade,
          "pai": pessoa3.pai,
          "mae": pessoa3.mae,
          "avô": pai.nome,
          "avó": mae.nome
        },
      {
        "nome": pessoa2.nome,
        "idade": pessoa2.idade
       } ]
  }
  console.log(arvGenFamilia, filhos)
}



  


main()