class Pessoa {
  nome: string;
  sobrenome: string;
  constructor(nome: string, sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

class PessoaFisica extends Pessoa{
   data_nascimento: Date;
   CPF: string;
   idade: number;
   data_atual = new Date();
   constructor(nome: string, sobrenome: string, data_nascimento: Date, CPF: string){
     super(nome, sobrenome);
     this.data_nascimento = data_nascimento;
     this.idade = data_nascimento.getFullYear() - this.data_atual.getFullYear();
     this.CPF = CPF;
   }
}

class PessoaJuridica extends Pessoa{
   CNPJ: string;
   constructor( nome: string,  sobrenome: string,  CNPJ: string){
     super(nome, sobrenome);
     this.CNPJ = CNPJ;
   }
}
