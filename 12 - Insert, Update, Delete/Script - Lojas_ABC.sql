create schema lojas_abc;

create table lojas_abc.cliente(
		id_cliente serial not null,
		nome_completo varchar(80) not null,
		data_nascimento varchar(10) not null,
		cpf varchar(11) not null,
		origem varchar(50),
		score int, 
		primary key (id_cliente),
		constraint cpf_uk unique (cpf)
);

create table lojas_abc.categoria(
		nome_categoria varchar(50) not null,
		id_categoria serial,
		primary key (id_categoria)
		);

create table lojas_abc.produto(
		id_produto serial not null, 
		id_categoria int,
		nome_produto varchar(80) not null,
		valor_produto numeric(12,2) not null,
		primary key (id_produto),
		constraint valor_uk unique (valor_produto),
		constraint categoria_fk foreign key(id_categoria) references lojas_abc.categoria(id_categoria)
); 

create table lojas_abc.vendedor(
		id_vendedor serial not null, 
		nome_vendedor varchar(100) not null,
		matricula int not null,
		primary key (id_vendedor)
);

create table lojas_abc.pedido( 
		id_pedido serial not null, 
		id_cliente int not null,
		id_vendedor int,
		data_pedido timestamp not null,
		primary key (id_pedido),
		constraint cliente_fk foreign key(id_cliente) references lojas_abc.cliente(id_cliente),
		constraint vendedor_fk foreign key(id_vendedor) references lojas_abc.vendedor(id_vendedor)
		);

create table lojas_abc.item_pedido_venda(
	id serial not null,
	id_pedido int not null,
	id_produto int not null,
	valor_produto numeric(12,2) not null,
	primary key (id),
	constraint pedido_fk foreign key(id_pedido) references lojas_abc.pedido(id_pedido),
	constraint produto_fk foreign key(id_produto) references lojas_abc.produto(id_produto),
	);


insert into lojas_abc.cliente(nome_completo, data_nascimento, cpf, origem, score)
values ('Yaqi Parente Abasto', '2002.05.23', '52045741583', 'Site', '86'), ('Iago Campos Faleiro', '1985.04.02', '79313214725', 'Site', '36'),
('Elizabeth Melo Girão', '10.08.2005', '08038416473', 'Site', '29'), ('Muriel Mondragão Vilarinho', '28.03.1952', '26444024765', 'Loja', '84'),
('Ananda Doutel Veiga', '03.10.1960', '47040162695', 'Loja', '53'), ('Francis Ruas Borba', '08.09.1976', '92389587267', 'Loja', '92'), ('Isis Cirne Veleda', '07.07.1995', '12644213460', 'Site', '90'),
('Grace Custódio Caires', '14.08.2002', '15151806033', 'Site', '48'), ('Antoine Paredes Fazendeiro', '12.11.2004', '30856537756', 'Loja', '42'), ('Davide Belém Imperial', '24.12.1990', '63706347431', 'Site', '69');

insert into lojas_abc.categoria(nome_categoria)
values ('Construção'), ('Móveis'), ('Celulares'), ('Eletrodomésticos');

insert into lojas_abc.produto(nome_produto, valor_produto, id_categoria)
values ('JANELA MAD ECOLY', '5010.99', '1'), ('TANQUE FIBRA BAKOF 2500L', '365.50', '1'), ('BOCAL TERMOFUSÃO TIGRE 25 MM', '6552.99', '1'), ('LIXEIRA PRIMAFER MULTIUSO 1014-2 BR', '746', '1'), ('MESA KAPPES 1100 C.PE METALICO CZ', '7559', '2'), ('CADEIRA PAPAI PANDA T 217', '7624', '2'), ('ARMARIO DCOSTA TB82NN 4P C.ESPELHO', '7289', '2'), ('GAVETEIRO DCOSTA 3GAV C.ROD TC402NP', '7047', '2'), ('BALCÃO DCOSTA 1 PORTA TC81 BP', '3550.99', '2'),
('FORNO IND GÁS VENÂNCIO F60I INOX', '1237', '4'), ('SECADORA ROUPA FISCHER AMIGA 220V', '6531', '4'), ('VENTIL ARNOTURBO SIL MAXX30TS3S 30CM220V', '885', '4'), ('HOME CINEMA SONY DAV-DZ275', '2437', '4'), ('TELEF CEL NOKIA 1208 GSM VIVO SC', '4604.99', '4'), ('REFRIG BRASTEMP BRM44HBA FF 375L BR 110V', '1298', '4'), ('TELEF CEL LG B220 AZ', '3460', '3'), ('TELEF CEL SAMSUNG C3222 DESBL RS', '2077', '3'), ('TELEF CEL MEU SN61 QUADRI CHIP PR', '6392', '3'), ('TELEF CEL LG GU230 GSM QUADR DESBL PR.VR', '2050', '3'), ('TELEF CEL NOKIA 1220', '4886', '3');

insert into lojas_abc.vendedor(nome_vendedor, matricula)
values ('Angela Gouveia Marins', '16142'), ('Mouhamed Eanes Carrasco', '17314'), ('Cristiana Aires', '19658'), ('Rayane Graça Loureiro', '12117');


insert into lojas_abc.pedido(id_cliente, data_pedido, id_vendedor)
values ('1', '2017-01-02 12:03:00', '3'), ('9', '2017-01-02 09:24:00', '4'), ('3', '07-09-2017 01:55:00', '3'), ('4', '2017-11-15 04:06:00', '3'), ('5', '04-03-2018 08:14:00', '1'), ('1', '2018-06-30 10:14:00', 
null), ('2', '2018-08-19 17:21:00', null), ('4', '04-11-2018 22:36:00', '4'), ('2', '2019-02-18 06:22:00', '2'), ('2', '2019-04-20 12:51:00', '1'), ('5', '2019-05-07 19:57:00', '2'), ('1', '2019-06-28 14:12:00', '3'), ('9', '2019-07-24 11:32:00', '3'), ('3', '2019-11-09 21:17:00', '1'), ('4', '2020-01-24 13:55:00', null), ('5', '2020-02-10 19:10:00', '4'), ('1', '2020-06-07 18:32:00', '3'), ('2', '2020-09-24 10:33:00', null), ('4', '2021-01-26 06:50:00', '1'), ('5', '2021-02-06 09:44:00', null),
('3', '2021-02-06 10:04:00', '3'), ('4', '2021-02-10 23:39:00', '2'), ('4', '2021-02-11 17:26:00', '3'), ('1', '2021-02-12 20:27:00', '2'), ('9', '2021-02-15 08:01:00', '1'), ('1', '2021-02-15 08:07:00', '1'), ('2', '2021-02-15 14:29:00', '1'), ('5', '2021-02-15 17:04:00', '1'), ('2', '2021-02-21 10:30:00', null), ('2', '2021-02-27 05:45:00', '3'), ('2', '2021-03-05 03:20:00', '4'), ('1', '2021-03-17 05:31:00', '3'), ('5', '2021-03-21 15:45:00', '2'), ('9', '2021-03-23 10:08:00', '3'), ('4', '2021-03-28 09:14:00', '3'), ('2', '2021-04-15 01:36:00', '1'), ('5', '2021-04-17 07:38:00', '2'), ('3', '2021-04-23 03:47:00', '2'), ('2', '2021-04-23 12:53:00', '2'),
('2', '2021-05-02 23:26:00', '4'), ('1', '2021-05-07 03:23:00', '3'), ('2', '2021-05-07 14:03:00', '2'), ('4', '2021-05-23 10:17:00', '1'), 
('5', '2021-07-11 02:34:00', '3');


insert into lojas_abc.item_pedido_venda(id_pedido, id_produto, valor_produto)
values ('24', '9', '3550.99'), ('39', '2', '365.5'), ('1', '7', '7289'), ('15', '20', '4886'), ('27', '15', '1298'), ('2', '7', '7289'), ('39', '9', '3550.99'), ('33', '12', '885'), ('8', '1', '5010.99'), ('41', '4', '746'),
('42', '19', '2050'), ('2', '16', '3460'), ('32', '18', '6392'), ('10', '7', '7289'), ('9', '5', '7559'), ('32', '19', '2050'), ('10', '15', '1298'), ('33', '5', '7559'), ('25', '18', '6392'), ('10', '6', '7624'), ('42', '16', '3460'), ('16', '1', '5010.99'),
('44', '6', '7624'), ('17', '19', '2050'), ('7', '17', '2077'), ('18', '17', '2077'), ('17', '10', '1237'), ('6', '10', '1237'), ('17', '12', '885'), ('2', '14', '4604.99'), ('26', '3', '6552.99'), ('11', '9', '3550.99'), ('1', '12', '885'), ('40', '11', '6531'), ('7', '19', '2050'),
('33', '18', '6392'), ('33', '15', '1298'), ('17', '17', '2077'), ('1', '4', '746'), ('1', '13', '2437'), ('9', '10', '1237'), ('9', '20', '4886'), ('30', '17', '2077'), ('5', '4', '746'), ('37', '6', '7624'), ('9', '4', '746'), ('15', '15', '1298'), ('2', '20', '4886'), ('15', '3', '6552.99'),
('37', '17', '2077'), ('18', '11', '6531'), ('3', '8', '7047'), ('4', '13', '2437'), ('12', '17', '2077'), ('13', '10', '1237'), ('14', '9', '3550.99'), ('19', '14', '4604.99'), ('20', '2', '365.5'), ('28', '5', '7559'), ('29', '11', '6531'), ('31', '4', '746'), ('38', '4', '746'), ('43', '20', '4886'), ('12', '19', '2050'),
('12', '12', '885'), ('12', '10', '1237'), ('12', '1', '5010.99'), ('12', '10', '1237'), ('35', '5', '8314.9'), ('35', '13', '2680.7'), ('36', '19', '2255'), ('34', '15', '1427.8'), ('35', '11', '7184.1'), ('34', '10', '1496.77'), ('21', '16', '3114'), ('22', '18', '5752.8'),
('23', '7', '6560.1')


update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 1.1 
where id_pedido = 34

update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 1.1
where id_pedido = 35

update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 1.1
where id_pedido = 36

update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 0.85
where id_pedido = 21

update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 0.85
where id_pedido = 22

update lojas_abc.item_pedido_venda
set valor_produto = valor_produto * 0.85
where id_pedido = 23

update lojas_abc.cliente
set nome_completo = 'Francis Borba'
where nome_completo = 'Francis Ruas Borba'

insert into lojas_abc.categoria(nome_categoria)
values ('Informática')

insert into lojas_abc.produto(nome_produto, valor_produto, id_categoria)
values ('NOTEBOOK CHROMEBOOK AD40', '2399.99', '5'), ('NOTEBOOK CHROMEBOOK AD43', '2899.99', '5')

update lojas_abc.vendedor
set matricula = 15758
where nome_vendedor = 'Angela Gouveia Marins'

delete from lojas_abc.produto
where nome_produto = 'NOTEBOOK CHROMEBOOK AD43'

update lojas_abc.produto
set valor_produto = valor_produto * 0.95
where id_categoria = 2 and valor_produto >= 5000 and valor_produto < 7500

update lojas_abc.produto
set valor_produto = valor_produto * 0.96
where valor_produto > 7600  and valor_produto < 700





