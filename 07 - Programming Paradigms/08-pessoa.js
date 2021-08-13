      /* Escreva uma classe Pessoa que representa uma pessoa numa árvore genealógica.
      A pessoa possui um nome, um pai e uma mãe (que também são pessoas). Forneça os
      seguintes membros para a classe:
      a) Construtores sobrecarregados que:
      i) inicialize o nome da pessoa, bem como seus antecessores (pai e mãe);
      ii) inicialize o nome da pessoa, e coloque seus antecessores para null;
      b) Um método que verifique a igualdade semântica entre duas pessoas (as pessoas
      são iguais se possuem o mesmo nome e a mesma mãe);
      c) Um método que verifique se duas pessoas são irmãs;

      d) Um método que verifique se uma pessoa é antecessora da pessoa que recebeu a
      mensagem (é seu pai ou sua mãe, ou antecessor do pai ou antecessor da mãe). */

      class Pessoa {
          constructor(nome, mae = null, pai = null) {
            this.nome = nome
            this.mae = mae
            this.pai = pai
          }
        }

        function saoIguais(pessoa, outraPessoa) {
          if(pessoa.nome == outraPessoa.nome){
            if(pessoa.mae.nome == outraPessoa.mae.nome){
              console.log("É a mesma pessoa")
              return true;
            } else { 
              console.log("Mães diferentes")
              return false;
            }
          }else{
            console.log("Pessoas diferentes")
            return false;
          }
          
        }

        function saoIrmoes(pessoa, outraPessoa) {
          if(pessoa.mae.nome == outraPessoa.mae.nome){
            if(pessoa.pai.nome == outraPessoa.pai.nome){
              console.log("São irmãos")
              return true;
            } else { 
              console.log("Não são irmãos")
              return false;
            }
          }else{
            console.log("Apenas parentes")
            return false;
          }
          
        }

        let mae1 = new Pessoa("Maria")
        let pai1 = new Pessoa("Augusto")
        let pessoa1 = new Pessoa("Silvana", mae1, pai1);

        let mae2 = new Pessoa("Maria")
        let pai2 = new Pessoa("Augusto")
        let pessoa2 = new Pessoa("Henrique", mae2, pai2);

        let mae3 = new Pessoa("Andressa")
        let pai3 = new Pessoa("Teodoro")
        let pessoa3 = new Pessoa("Silvana", mae3, pai3);

        saoIrmoes(pessoa1,pessoa2)
        saoIguais(pessoa1,pessoa2)
        console.log(pessoa1)
        console.log(pessoa2)
        saoIrmoes(pessoa2,pessoa3)
        saoIguais(pessoa2,pessoa3)
        console.log(pessoa2)
        console.log(pessoa3)
        saoIrmoes(pessoa1,pessoa3)
        saoIguais(pessoa1,pessoa3)
        console.log(pessoa1)
        console.log(pessoa3)