function getDadosPedido() {
  return new Promise((resolve, reject) => {
      try {
          resolve({
              id: 123,
              data: new Date(),
              desconto: 5.00,
              valor: 100,
              parcelas: 1,
              observacaoPedido: 'Cliente com Pressa',
              observacaoNota: '',
              somenteNotaFiscal: false,
              formaPagamento: { descricao: 'Dinheiro' },
              idPessoa: 9999
          })
      } catch(e) {
          reject(e)
      }
  })
}

function calculaValorFinalPedido(ped) {
  return new Promise((resolve, reject) => {
      try {
          ped.valorFinal = ped.valor - ped.desconto
          resolve(ped)
      } catch(e) {
          reject(e)
      }
  })
}

function montarObsNota(ped) {
  return new Promise((resolve, reject) => {
      try {
          if(ped.somenteNotaFiscal) {
              ped.observacaoNota = `Parcelas: ${ped.parcelas}. Valor Final ${ped.valorFinal}. Forma de Pagamento: ${ped.formaPagamento.descricao}.`
          }
          resolve(ped)
      } catch(e) {
          reject(e)
      }
  })
}

//=====================

let pedido = null

getDadosPedido().then((p) => {
  pedido = p
  console.log('pedido inicial: ', pedido)

  calculaValorFinalPedido(pedido).then((newP) => {
      console.log('pedido com valor final', newP)

      montarObsNota(newP).then((pFinal) => {

          console.log('pedido com obs', pFinal)

      }).catch(e => console.log(e.toString()))

  }).catch(e => console.log(e.toString()))
}).catch(e => console.log(e.toString()))