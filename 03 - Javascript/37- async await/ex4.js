async function imprimeDadosPessoa(){
  let Pessoa = await getPessoa()
  console.log({Pessoa})
}

async function getPessoa(){
  try{
    return {
      Nome: 'José da Silva',
      Idade: 18,
      Genero: 'Masculino'
    }
  } catch(e){
    throw e
  }
}

imprimeDadosPessoa()