class Produto{
  constructor(preco_do_produto, qtd_estoque, descricao){
      this.preco_do_produto = preco_do_produto
      this.qtd_estoque = qtd_estoque
      this.descricao = descricao
  }
}

class Cliente{
  constructor(nome){
      this.nome = nome
  }
}

class ItemPedido{
  constructor(produto, quantidade){
      this.produto = produto
      this.quantidade = quantidade
  }
}

class Pedido{
  constructor(){
      this.itens = []
      this.forma_pagamento = null
      this.cliente =  null
      this.valor_total = 0
  }
}

function finalizar_pedido(pedido){
  for (var i = 0; i < pedido.itens.length; i++) {
      //console.log(pedido.itens[i]); // mostra cada item que passou pelo for
      console.log(pedido.cliente.nome); 
      if (pedido.itens[i].produto.qtd_estoque < pedido.itens[i].quantidade){
      // quantidade do estoque do produto é menor que quantidade do pedido?
      // se sim:
      console.log(pedido.itens[i].produto.descricao)
          console.log('Quantidade em estoque insuficiente')
      } 

     
      // else if(pedido.valor_total >= pedido.itens[i].produto.qtd_estoque * pedido.itens[i].produto.preco_do_produto){
      //   console.log('Valor total: '+ pedido.valor_total + ' pago em '+ pedido.forma_pagamento)
      // }
      else{
        pedido.valor_total = pedido.itens[i].quantidade * pedido.itens[i].produto.preco_do_produto
          console.log('Valor total: '+ pedido.valor_total + ' pago em '+ pedido.forma_pagamento)
      }
  }
}

doritos = new Produto(10, 100, 'Doritos');
cerveja = new Produto(5, 50, 'Cerveja');

let doritos_selecionado = new ItemPedido(doritos, 1);
let cerveja_selecionada = new ItemPedido(cerveja, 60);

let cliente_leticia = new Cliente("Leticia Cruz");

let pedido_da_leticia = new Pedido();
pedido_da_leticia.itens.push(doritos_selecionado, cerveja_selecionada);
//pedido_da_leticia.itens.push(cerveja_selecionada);
pedido_da_leticia.cliente = cliente_leticia;
pedido_da_leticia.forma_pagamento = 'dinheiro';
// pedido_da_leticia.valor_total = 500;
//cerveja_selecionada = new ItemPedido(cerveja, 60);
//feijao_selecionado = new ItemPedido(feijao, 1)
finalizar_pedido(pedido_da_leticia);

let cliente_danilo = new Cliente("Danilo Cruz");

let pedido_do_danilo = new Pedido();
pedido_do_danilo.itens.push(doritos_selecionado);
//pedido_do_danilo.itens.push(cerveja_selecionada);
pedido_do_danilo.cliente = cliente_danilo;
pedido_do_danilo.forma_pagamento = 'cartão de credito';
//pedido_do_danilo.valor_total = 400;
finalizar_pedido(pedido_do_danilo);