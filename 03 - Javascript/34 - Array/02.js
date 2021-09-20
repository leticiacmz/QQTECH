let ragnar = {
  nome: ['Ragnar', 'Lothbrok'], //nome e sobrenome
  idade: 40,
  sexo: 'Masculino',
  viagens: ['Inglaterra', 'Dinamarca', 'Suécia'],

  AdicionarPais: function(pais){
    this.viagens.push(pais)
    console.log(pais + " adicionado com sucesso")
    },
    
saudacao: function(){
  return (this.nome[0] + " " + this.nome[1])
},
    BemVindo: function(){
      console.log("Seja bem Vindo "  + this.saudacao()
      + "\n Idade: " + this.idade
      + "\n Sexo: " + this.sexo
      + "\n Paises visitados: " + this.viagens[0], this.viagens[1], this.viagens[2], this.viagens[3]
      
      )

    }
}

ragnar.AdicionarPais("Brasil")
ragnar.BemVindo()

// console.log(ragnar)

