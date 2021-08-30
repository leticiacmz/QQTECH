----Aula 06----

--exc 01

select
	id_pedido,
	count(1) as pedidos,
	sum(valor_produto) as total
from
	lojas_abc.item_pedido_venda
group by
	id_pedido
having
	count(id_pedido) > 1
order by
	id_pedido 

--exc 02

select
	id_vendedor,
	count(1) as vendas_feitas
from
	lojas_abc.pedido
group by
	id_vendedor
having
	count(id_vendedor) > 1
order by
	vendas_feitas desc,
	id_vendedor 

--exc 03
	
select
	id_pedido,
	count(3) as qtd_pedidos,
	sum(valor_produto) as total
from
	lojas_abc.item_pedido_venda
group by
	id_pedido
having
	sum(valor_produto) > 8000
order by
	total desc
	
--exc 04

select nome_completo, cpf, score,
   case 
      when score > 80 then 'ouro'
      when score > 60 and score < 79 then 'prata'
      else 'bronze' 
      end medalha
   from lojas_abc.cliente	
	group by score, nome_completo, cpf 
	order by score, nome_completo, medalha
	
--exc 05

	select
	cliente.nome_completo,
	cliente.cpf,
	cliente.score,
	produto.nome_produto,
	produto.valor_produto
from
	lojas_abc.cliente,
	lojas_abc.produto
where
	cliente.nome_completo = 'Francis Borba'
	or cliente.nome_completo = 'Isis Cirne Veleda'
order by
	cliente.nome_completo
	
--exc 06
	
select
	data_pedido::date,
	pedido.id_pedido, produto.nome_produto,
		case
		when id_vendedor is null then 'Não teve vendedor'
		else 'Teve vendedor'
	end vendedor
from
	lojas_abc.pedido,
	lojas_abc.produto,
	lojas_abc.item_pedido_venda
where pedido.id_pedido = item_pedido_venda.id_pedido and item_pedido_venda.id_pedido = item_pedido_venda.id_produto
	order by
	pedido.id_pedido
	
	
--exc 07

select
	id,
	id_produto,
	sum (id_produto) as qtd_produtos
from
	lojas_abc.item_pedido_venda,
	lojas_abc.pedido
where
	pedido.data_pedido in (
	select
		data_pedido
	from
		lojas_abc.pedido
	where
		data_pedido::date > '2000-01-01')
group by
	id,
	id_produto,
	pedido.data_pedido

--exc 08 

select nome_completo, score, data_nascimento,
 extract('month' from data_nascimento) as mes_aniversario 
 from lojas_abc.cliente 
 where score > 60

--exc 09
 
select id_pedido, data_pedido,
avg(id_pedido) as media_pedidos
from lojas_abc.pedido 
where data_pedido > '2021-01-01' and data_pedido < '2021-05-01'
group by id_pedido 



----Aula 07---- 

--exc 01

alter table lojas_abc.item_pedido_venda

add constraint nome_fk foreign key(nome_produto) references lojas_abc.produto(nome_produto)
	
	