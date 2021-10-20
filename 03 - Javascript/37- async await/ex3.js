async function getDadosPedido() {
    try {
      return{
        id: 600124578,
        data: new Date(),
        desconto: 5.0,
        valor: 100,
        parcelas: 1,
        observacaoPedido: "Cliente com pressa",
        observacaoNota: "",
        somenteNotaFiscal: true,
        formaPagamento: { descricao: 'Dinheiro'},
        idPessoa: 204578,
      };
    } catch (e) {
      throw(e);
    }
  }

async function calculaValorFinal(pedido) {
    try {
      return(
        pedido.valorFinal = pedido.valor - pedido.desconto)
    } catch (e) {
      throw (e);
    }
  }

  async function montarObsNota(pedido){
    try{
      if(pedido.somenteNotaFiscal){
        pedido.observacaoNota = `Parcelas: ${pedido.parcelas}, Valor final: R$ ${pedido.valorFinal}, Forma de Pagamento: ${pedido.formaPagamento.descricao}`
      }
    }catch(e){
      throw e
    }
  }

async function imprimeDadosPedido(){
  const pedido = await getDadosPedido()
  console.log('Pedido Inicial: ', pedido)
  await calculaValorFinal(pedido)
  await montarObsNota(pedido)
  console.log('Pedido Final: ', pedido)
}

imprimeDadosPedido()