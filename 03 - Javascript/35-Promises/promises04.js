let pedido = null
 

 

 
function getDadosPedido() {
    return new Promise(function (resolve, reject) {
        try {
            resolve(
                {
                    id: 600124578,
                    data: new Date(),
                    desconto: 5.00,
                    valor: 100,
                    parcelas: 1,
                    observacaoPedido: 'Cliente com pressa',
                    observacaoNota: '',
                    somenteNotaFiscal: true,
                    formaPagamento: { descricao: 'Dinheiro' },
                    idPessoa: 204578
                }
            )
        } catch (e) {
            reject(e)
        }
    }).then(function(result) {
      pedido = result
  })
}
getDadosPedido(pedido)
console.log(pedido)