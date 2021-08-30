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
	
	
	
-----Aula 18-------
	

---exc 01
	
	
select
	c.nome_completo,
	c.score,
	p.id_pedido,
	p.data_pedido
from
	lojas_abc.cliente c
inner join lojas_abc.pedido p on
	c.id_cliente = p.id_cliente
where
	p.data_pedido >= '2020-02-02 00:00:00'
	and p.data_pedido < '2021-05-03 00:00:00'
order by
	p.data_pedido 

---exc 02 

select
	ped.id_pedido,
	ipv.id_produto,
	prod.nome_produto,
	ipv.valor_produto as valor_vendido,
	prod.valor_produto
from
	lojas_abc.produto prod,
	lojas_abc.pedido ped
inner join lojas_abc.item_pedido_venda ipv on
	ped.id_pedido = ipv.id_pedido
where
	prod.id_produto = ipv.id_produto
order by
	ped.id_pedido,
	prod.nome_produto

---exc 03 
	
select
	c.nome_completo,
	c.cpf,
	p.id_pedido,
	p.data_pedido,
	prod.nome_produto,
	ipv.valor_produto
from
	lojas_abc.produto prod,
	lojas_abc.item_pedido_venda ipv,
	lojas_abc.cliente c
left join lojas_abc.pedido p on
	c.id_cliente = p.id_cliente
where
ipv.id_produto = prod.id_produto and p.id_pedido = ipv.id_pedido 
order by
	c.nome_completo,
	p.data_pedido
	
	
	
	---exc 04
	
	
	select
	v.nome_vendedor, p.id_vendedor, 
	count(2) as qtd_pedidos
from
	lojas_abc.vendedor v
left join lojas_abc.pedido p on
	v.id_vendedor = p.id_vendedor
group by
	v.nome_vendedor,  p.id_vendedor
order by
	qtd_pedidos desc
	
	---exc 05
	
select
	c.nome_completo,
	prod.nome_produto,
	p.data_pedido
from
	lojas_abc.item_pedido_venda ipv,
	lojas_abc.produto prod,
	lojas_abc.cliente c
inner join lojas_abc.pedido p on
	p.id_cliente = c.id_cliente
where
	c.score > 70
	and ipv.id_produto = prod.id_produto
	and p.id_pedido = ipv.id_pedido
order by
	c.nome_completo,
	prod.nome_produto 
	
	
	---exc 06
	
	select	c.nome_categoria,  
	count(ipv.id_produto > 2) as qtd_vendida
from
	lojas_abc.item_pedido_venda ipv,
	lojas_abc.categoria c
left join lojas_abc.produto prod on
	c.id_categoria = prod.id_categoria
where
	ipv.id_produto = prod.id_produto 
group by
	c.nome_categoria		
		
---exc 07
		
	
select
	c.nome_completo,
	ped.id_pedido,
	cat.nome_categoria,
	prod.nome_produto,
	ipv.valor_produto,
	(extract(month
from
		ped.data_pedido)) as mes,
		(extract(year
from
		ped.data_pedido)) as ano
from
	
	lojas_abc.cliente c
left join lojas_abc.pedido ped on
	c.id_cliente = ped.id_cliente
left join lojas_abc.item_pedido_venda ipv on
	ped.id_pedido = ipv.id_pedido
left join lojas_abc.produto prod on
	ipv.id_produto = prod.id_produto
left join lojas_abc.categoria cat on
	prod.id_categoria = cat.id_categoria
where
	exists (
	select
		count(ped.id_cliente) as compras
	from
		lojas_abc.pedido ped
	where
		ped.id_cliente = c.id_cliente
		and (extract( month
	from
		ped.data_pedido) >= 01)
		and (extract( year
	from
		ped.data_pedido) >= 2018)
	having
		count(*) > 9)
order by
	c.nome_completo
		
		
		--- exc 08 
		
select
	v.nome_vendedor,
	cat.nome_categoria,
	count(prod.id_produto) as total_vendido
from
	lojas_abc.vendedor v
inner join lojas_abc.pedido ped on
	v.id_vendedor = ped.id_vendedor
inner join lojas_abc.item_pedido_venda ipv on
	ped.id_pedido = ipv.id_pedido
inner join lojas_abc.produto prod on
	ipv.id_produto = prod.id_produto
inner join lojas_abc.categoria cat on
	prod.id_categoria = cat.id_categoria
where
	exists (
	select
		*
	from
		lojas_abc.pedido ped
	where
		ped.data_pedido > NOW() - interval '2 years')
group by
	v.nome_vendedor,
	cat.nome_categoria