class Emprestimo {
  constructor(nomeLivro, nomePessoa, tempo){
  this.nomeLivro = livroUm.getNome
  this.nomePessoa = leitorUm.getNome
  this.tempo = tempo
  console.log( "A " + this.nomePessoa + " pegou o livro " + this.nomeLivro + " por " + tempo + " dias. ")
}
}

class Livro {
  constructor(nome, autor, ano){
    this.nome = nome
    this.autor = autor
    this.ano = ano
  }
  get getNome(){
    return this.nome
  }
}

class Pessoa{
  constructor(nome, dataNascimento){
    this.nome = nome
    this.dataNascimento = dataNascimento
  }
  get getNome(){
    return this.nome
  }
}

const livroUm = new Livro('1984', 'George Orwell', '1949')
const leitorUm = new Pessoa('Leticia', '05/02/1998')

const emprestimo = new Emprestimo('', '', 25)