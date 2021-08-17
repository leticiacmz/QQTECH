	select 
	max(data_nascimento) as mais_novo,
	min(data_nascimento) as mais_velho
	from lojas_abc.cliente 


	select
	max(valor_produto) as maior_valor,
	min(valor_produto) as menor_valor,
	sum(valor_produto) as total,
	avg(valor_produto) as m�dia
	from lojas_abc.produto

	select id_pedido,
		sum(valor_produto) as total
	from lojas_abc.item_pedido_venda
	group by id_pedido
	order by id_pedido 
	
	select id_cliente,
	sum(id_cliente) qtd_pedidos
	from lojas_abc.cliente
	group by id_cliente
	order by id_cliente

	select id_pedido, cliente.id_cliente, 
	count(id_pedido) qtd_pedidos
	from lojas_abc.item_pedido_venda, lojas_abc.cliente 
	group by id_pedido, id_cliente
	having count(*) > 1
	order by count(id_pedido);



