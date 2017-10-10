class Pessoa {
  nome: string;
  sobrenome: string;
  constructor(public nome: string; public sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

class PessoaFisica extends Pessoa{
   data_nascimento: Date;
   CPF: string;
   constructor(public nome: string; public sobrenome: string; public data_nascimento: Date; public CPF: string){
     super(nome, sobrenome);
     this.data_nascimento = data_nascimento;
     this.CPF = CPF;
   }
}

class PessoaJuridica extends Pessoa{
   CNPJ: string;
   constructor(public nome: string; public sobrenome: string; public CNPJ: string){
     super(nome, sobrenome);
     this.CNPJ = CNPJ;
   }
}
