select * from lojas_abc.pedido
where id_cliente = 3 or id_cliente = 4

select * from lojas_abc.pedido
where data_pedido::date >= '2020-05-02'
order by data_pedido desc 

select nome_completo, data_nascimento, origem from lojas_abc.cliente
order by nome_completo, data_nascimento 

select distinct id_cliente from lojas_abc.pedido
order by id_cliente 

select nome_produto, valor_produto from lojas_abc.produto
where nome_produto like '%nokia%' or nome_produto like '%NOKIA%'

select distinct id_pedido from lojas_abc.item_pedido_venda
order by id_pedido 


select nome_completo, cpf, score from lojas_abc.cliente 
where data_nascimento::date > '1950-01-01' or data_nascimento::date < '2000-12-31' and nome_completo like 'a%'

select item_pedido_venda.id_produto, produto.valor_produto  from lojas_abc.item_pedido_venda, lojas_abc.produto
where produto.valor_produto >= '3000'
order by id_produto 

select
max(valor_produto) maior_valor,
min(valor_produto) menor_valor,
sum(valor_produto) total,
avg(valor_produto) m�dia_valor
 from lojas_abc.produto

 select id_pedido,
 sum(valor_produto) total
 from lojas_abc.item_pedido_venda ipv 