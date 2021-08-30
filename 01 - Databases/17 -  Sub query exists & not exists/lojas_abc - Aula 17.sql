----Aula 17

---exc 01

select
	p.nome_produto,
	count(ipv.id_produto) as qtd_vendida
from
	lojas_abc.item_pedido_venda ipv,
	lojas_abc.produto p
where
	ipv.id_produto = p.id_produto
group by
	p.nome_produto
having
	count(*) > 0
order by
	p.nome_produto desc

---exc 02

select
	p.nome_produto,
	p.id_produto
from
	lojas_abc.produto p
where
	not exists (
	select
		ipv.id_produto
	from
		lojas_abc.item_pedido_venda ipv
	where
		p.id_produto = ipv.id_produto)

---exc 03

select c.nome_completo, c.cpf
from lojas_abc.cliente c
where not exists (select p.id_cliente from lojas_abc.pedido p where p.id_cliente = c.id_cliente and p.data_pedido > NOW() - interval ' 6 months')
order by c.nome_completo 

--- exc 04

select v.nome_vendedor,
count(p.id_vendedor) as qtd_vendida
from lojas_abc.vendedor v, lojas_abc.pedido p
where p.id_vendedor = v.id_vendedor 
group by v.nome_vendedor
having count(*) > 0
order by qtd_vendida, v.nome_vendedor  

---exc 05
select
	p.id_pedido,
	p.data_pedido,
	sum(ipv.valor_produto) as valor_total
from
	lojas_abc.pedido p,
	lojas_abc.item_pedido_venda ipv
where
	p.id_pedido in (
	select
		p.id_pedido
	from
		lojas_abc.pedido p
	where
		 (extract( month
	from
		p.data_pedido) = 04)
		and (extract( year
	from
		p.data_pedido) = 2021)
		and p.id_pedido = ipv.id_pedido
	group by
		p.id_pedido)
group by
	p.id_pedido,
	p.data_pedido
order by
	valor_total desc