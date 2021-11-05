# -*- coding: utf-8 -*-
"""
Created on Thu Nov  4 13:42:46 2021

@author: Leticia Cruz
"""

import pandas as pd
import numpy as np


##ABRIR BASE DE SALÁRIOS

path = r'C:\Users\980084\Documents\Treinamento Python\aula_3\exercicios'

base_salarios = pd.read_csv(path+'\\base_salarios.csv',
                 sep=';',
                 decimal=',',
                 encoding='latin-1')

##CONTAR A QUANTIDADE DE LINHAS E COLUNAS

base_salarios.shape


##VERIFICAR A QUANTIDADE DE CASOS POR ANO

base_salarios['Year'].value_counts()


##FAZER A MÉDIA DE SALÁRIO BASE E SALÁRIO TOTAL POR ANO

salario_base_total = base_salarios.groupby(['Year']).agg({'BasePay': 'mean','TotalPay': 'mean'})

##Contar a quantidade de casos e salário médio por ano, e função.

salario_cargo_total = base_salarios.groupby(['Year', 'JobTitle']).agg({'Year':'count', 'TotalPay':'mean'})

salario_cargo_total = salario_cargo_total.rename(columns={'Year':'Casos'})

base_salarios['Year'].unique()

## Para cada caso, calcular quanto o salário dele pesa sobre o total do ano

diferenca_salarios = base_salarios


diferenca_salarios['Total2011'] = diferenca_salarios['TotalPay'].sum()
diferenca_salarios['Total2012'] = diferenca_salarios['TotalPay'].sum()
diferenca_salarios['Total2013'] = diferenca_salarios['TotalPay'].sum()
diferenca_salarios['Total2014'] = diferenca_salarios['TotalPay'].sum()



conditions = [diferenca_salarios['Year'] == 2011,
              diferenca_salarios['Year'] == 2012,
              diferenca_salarios['Year'] == 2013,
              diferenca_salarios['Year'] == 2014]

choices = [(diferenca_salarios['TotalPay']/diferenca_salarios['Total2011']),
           (diferenca_salarios['TotalPay']/diferenca_salarios['Total2012']),
           (diferenca_salarios['TotalPay']/diferenca_salarios['Total2013']),
           (diferenca_salarios['TotalPay']/diferenca_salarios['Total2014'])]

diferenca_salarios['PesoSalario'] = np.select(conditions,choices,default=0)

diferenca_salarios = diferenca_salarios.groupby(['Year', 'JobTitle', 'Total2011', 'Total2012', 'Total2013', 'Total2014', 'PesoSalario']).agg({ 'TotalPay':'sum'}).sort_values(by=['PesoSalario','Year'],ascending=False)

salario_cargo_total = salario_cargo_total.rename(columns={'Year':'Casos'})

diferenca_salarios = diferenca_salarios.sort_values(by=['PesoSalario','Year'],ascending=False)


##Tirar fora da base casos que tenham beneficios maior que 100

beneficios = base_salarios[base_salarios['Benefits'] > 100].index
base_salarios = base_salarios.drop(beneficios, axis=0)

base_salarios['Benefits'].unique()

##Deixar na base apenas casos sem beneficios

base_salarios['Benefits'] = base_salarios['Benefits'].replace(np.nan, 0)

beneficios = base_salarios[base_salarios['Benefits'] != 0 ].index
base_salarios = base_salarios.drop(beneficios, axis=0)

base_salarios['Benefits'].unique()

##Criar uma coluna com apenas o primeiro nome de cada pessoa

splitName = base_salarios['EmployeeName'].str.split()
firstName = base_salarios['First_Name'] = splitName.str[0]

##Criar uma coluna apenas com a inicial de cada nome da pessoa (ex: Pedro Schoen vira PS)

lastName = splitName.str[-1]

initials = base_salarios['Initials'] =  firstName.str[0] + lastName.str[0] 

##Salvar uma base quebrada pelo cargo, ano, se tem beneficios ou não, trazendo a soma do total pay, e do basepay.

base_formatada = pd.read_csv(path+'\\base_salarios.csv',
                  sep=';',
                  decimal=',',
                  encoding='latin-1',
                  usecols=['JobTitle','Benefits','TotalPay', 'BasePay'])

base_formatada['Benefits'] = base_formatada['Benefits'].replace(np.nan, 0)


base_formatada['Benefits'] = base_formatada['Benefits'].apply(lambda x: 'True' if x > 0 else 'False')


base_formatada = base_formatada.groupby(['JobTitle', 'Benefits' ]).agg({'BasePay':'sum','TotalPay':'sum'}).reset_index()

path_salvar = r'C:\Users\980084\Documents\Treinamento Python\aula_3\exercicios'

base_formatada.to_excel(path_salvar+'\\base_formatada.xlsx',
             index=False)


base_formatada.to_csv(path_salvar+'\\base_formatada.csv',
          sep=';',
          decimal=',',
          encoding='latin-1',
          index=False)

