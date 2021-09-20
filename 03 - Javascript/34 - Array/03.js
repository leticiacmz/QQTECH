class Pessoa{
  constructor(nome, idade, sexo, viagens){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.viagens = viagens
  }
}

pessoa01 = new Pessoa(['Ragnar', 'Lothbrok'], 40, 'Masculino', ['Inglaterra', 'Dinamarca', 'Suécia'])
pessoa02 = new Pessoa(['Leticia', 'Cruz'], 23, 'Feminino', ['Brasil'])

let umArray = [pessoa01, pessoa02]

function returnArray(){
  let esteArray = []
  for (let i of pessoa01.viagens){
    esteArray.push(i)
  }
  for (let i of pessoa02.viagens){
    esteArray.push(i)
  }
  return esteArray
}

console.log(returnArray())

let umArray2 = [pessoa02, pessoa01]

umArray2.sort(function(p1, p2){
  if(p1.idade > p2.idade) {
    return -1
  } else if (p1.idade < p2.idade){
    return 1
  } else {
    return 0
  }  
  })

console.log(umArray2)