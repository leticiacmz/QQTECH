# -*- coding: utf-8 -*-
"""
Created on Tue Feb  4 13:48:55 2020

@author: 201433
"""

import pandas as pd
import numpy as np

pd.options.display.max_columns = 999999


### ABRIR A BASE DE PRODUCAO 

path = r'C:\Users\980084\Documents\Treinamento Python\aula_2'

tabela_df = pd.read_csv(path+'\\producao_sample.csv',
                 sep=';',
                 decimal=',',
                 encoding='latin-1')



### FILTRAR DIA DA SEMANA SEXTA-FEIRA E SABADO

tabela_df['DIA_SEMANA'].unique()

#tabela_df = tabela_df= tabela_df['DIA_SEMANA'].str.replace(' ', '')

tabela_df = tabela_df[tabela_df['DIA_SEMANA'].isin(['SEXTA-FEIRA', 'SÁBADO'])]

tabela_df = tabela_df[(tabela_df['DIA_SEMANA']=='SEXTA-FEIRA') | (tabela_df['DIA_SEMANA'] == 'SÁBADO')]

### AGREGAR BASE POR DATA, FORMA DE PAGAMENTO, SOMANDO O VALOR_LB e pegando o máximo prazo médio (COLUNA PLANO).

tabela_df['PLANO'].unique()

tabela_df['PLANO'] = tabela_df['PLANO'].replace('A VISTA',0)
tabela_df['PLANO'] = tabela_df['PLANO'].astype(np.int64)

tabela_agg  = tabela_df.groupby(['DATA','FORMA_PAGT']).agg({'VALOR_LB':'sum','PLANO':'max'}).reset_index()

#tabela_df.info()

### SALVAR A BASE      

path_salvar = r'C:\Users\980084\Documents\Treinamento Python\aula_2'
tabela_agg.to_excel(path_salvar+'\\teste.xlsx',
             index=False)

tabela_agg.to_csv(path_salvar+'\\teste_csv.csv',
           sep=';',
           decimal=',',
           encoding='latin-1',
           index=False)

