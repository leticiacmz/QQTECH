let pedido = getDadosPedido();
pedido = calculaValorFinal(pedido);
pedido = validaNotaFiscal(pedido);

pedido.then(function(result) {
  console.log(result);
});

function calculaValorFinal(pedido) {
  pedidofinal = new Promise(function (resolve, reject) {
    try {
      resolve(pedido);
    } catch (e) {
      reject(e);
    }
  })
  .then(function (result) {
    result["valorFinal"] = result["valor"] - result["desconto"];
    return result;
  });
  return pedidofinal
}

function validaNotaFiscal(pedido){
  novoPedido = new Promise(function (resolve, reject){
    try {
      resolve(pedido)
    } catch (e) {
      reject(e)
    }
  }).then(function(result){
    if(result["somenteNotaFiscal"] == true){
      result["observacaoNota"] = "Parcelas: " + result["parcelas"] + "Valor final: R$" + result["valorFinal"] + "Forma de Pagamento"
    }
  })
}

function getDadosPedido() {
  return new Promise(function (resolve, reject) {
    try {
      resolve({
        id: 600124578,
        data: new Date(),
        desconto: 5.0,
        valor: 100,
        parcelas: 1,
        observacaoPedido: "Cliente com pressa",
        observacaoNota: "",
        somenteNotaFiscal: true,
        formaPagamento: { descricao: "Dinheiro" },
        idPessoa: 204578,
      });
    } catch (e) {
      reject(e);
    }
  });
}

function main() {
  getDadosPedido(pedido.push())
    .then((result) => {
      pedido = result;

      console.log(pedido);
    })
    .catch((error) =>
      console.log("Whoops! Algo deu errado!: " + error.message)
    );
}

main();
pedido.forEach(function (valor, desconto) {});
// function aplicaDesconto(valor, desconto) {
//   let novovalor = valor - desconto;
// console.log(novovalor)

//   return new Promise(function (resolve, reject) {

//     try {
//       resolve(
//         console.log("Desconto Aplicado no valor do pedido"));
//     } catch (e) {
//       reject(e);
//     }
//   });

// }
