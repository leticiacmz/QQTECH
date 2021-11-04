# -*- coding: utf-8 -*-
"""
Created on Mon Jan 27 09:25:47 2020

@author: 201433
"""


##### EXERC 1

#crie uma variavel chamada x , com valor de 10 e printe



x = 10

print(x)



#### EXERC 2

# eleve a variavel x ao cubo e printe

x = 10

x = x**3

print(x)


##### EXERC 3

### Some o primeiro e o terceiro valor da lista e printe a resposta 

lista = [1,2,3,4,5]

print(lista[0] + lista[2])


### EXERC 4

### Printe todos os números de 5 até 20 #DICA USE CONDICIONAIS E RANGE

for i in range (5,21):
    print(i)


# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20

### EXERC 5

### Printe todos os números até 1000 que são pares

for i in range (0,1001):
    if i % 2 == 0:
        print(i)

       
# 0
# 2
# 4
# 6
# 8
# 10
# ...

### EXERC 6
        
## Uma funcao, que as entradas sejam a e b. Caso a seja > 0, printe a+b, senão, a-b

def func(a,b):
    if a > 0:
        print(a + b)
    else:
        print(a - b)
    
func(0,1)
#-1
func(-1,2)
#-3


### EXERC 7

## Uma funcao,  que as entradas sejam a e b. Caso a seja > 0, printe a+b, senão, a-b. Se b for 0, printe 0.

def func(a,b):
    if b == 0:
        print(b)
    else:
        if a > 0:
            print(a + b)
        else:
            print(a - b)
   
    
func(0,1)
#-1
func(-1,2)
#-3
func(1,0)
#0



