class Contato {
  Nome= ""
  Telefone = 0
}

class Agenda {
  ListaContatos = []
  cadastrarContato(novoContato1, novoContato2) {
    this.ListaContatos.push(novoContato1, novoContato2)
  }
}

function main() {
  let novoContato1 = new Contato()
  let novoContato2 = new Contato()
  novoContato1.Nome = 'Leticia'
  novoContato1.Telefone = '59872-5384'
  novoContato2.Nome = 'Jefferson'
  novoContato2.Telefone = '98568-7584'

  const agenda= new Agenda()
  agenda.cadastrarContato(novoContato1, novoContato2)

  //console.log(novoContato1, novoContato2)
  console.log(agenda)
}

main()