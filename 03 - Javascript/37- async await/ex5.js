async function Pessoa(Nome, Idade, Genero){
  try{
    return ({
      Nome: Nome,
      Idade: Idade,
      Genero: Genero
    })
  } catch(error){
    throw error
  }
}

async function calcularDias(pessoa){
  try{
    if(pessoa.Idade > 8){
      let dias = pessoa.Idade * 365
      return dias
    } else {
      error = 'Idade inválida'
    }
  } catch(error) {
throw error(error)
  }
}

async function letrasNome(pessoa){
  try{
    let numChar = pessoa.Nome.length
    return numChar
  } catch (error){
    throw error(error)
  }
}

async function getDadosPessoa(){
  let pessoa = await Pessoa('Leticia', 23, 'Feminino');
  let [dias, numCharNome] = [await calcularDias(pessoa), await letrasNome(pessoa)]
  console.log(`Você nasceu a ${dias} dias e tem ${numCharNome} letras em seu nome.`)
}

getDadosPessoa()