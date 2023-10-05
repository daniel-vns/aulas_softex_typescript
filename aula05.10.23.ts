class Pessoa {
    nome: string;
    idade: number;
    email: string;
    
    constructor (nome: string, idade: number, email: string){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class Aluno extends Pessoa {
    matricula: number;

    constructor (nome: string, idade: number, email: string, matricula: number){
        super(nome, idade, email);
        this.matricula = matricula;
    }
}

class Retangulo {
    largura: number;
    altura: number;

    constructor (largura: number, altura: number){
        this.largura = largura;
        this.altura = altura;
    }

    calculaArea(): number{
        return (this.largura * this.altura) / 2;
    }

    calcularPerimetro(): number{
        return this.largura * 3;
    }
}

class Circulo {
    raio: number;

    constructor (raio: number){
        this.raio = raio;
    }

    calcularArea(): number{
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularCircunferencia(): number{
        return 2* Math.PI * this.raio;
    }
}

class ContaBancaria{
    saldo: number;
    numeroConta: number;

    constructor (saldo: number = 0, numerConta: number){
        this.saldo = saldo;
        this.numeroConta = numerConta;
    }

    depositar(valor: number): void{
        if (valor>0){
            this.saldo += valor;
            console.log(`Depósito no valor de R$ ${valor} realizado com sucesso`)
        }else{
            console.log("o valor dever ser maior que 0");
        }
    }

    sacar(valor: number): void{
        if (valor>0 && valor<=this.saldo ){
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso`);
        }else{
            console.log("Saldo insuiciente para realizar o saque");
        }
    }

    verificarSaldo(): number{
        return this.saldo;
    }
}

class Produto{
    nome: string;
    preco: number;
    quantidade: number;

    constructor (nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorTotal(): number{
        return this.preco * this.quantidade;
    }
}

class Triangulo{
    lado1: number;
    lado2: number;
    lado3: number;

    constructor (lado1: number, lado2: number, lado3: number){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    validarTriangulo(): boolean{
        return this.lado1 + this.lado2 > this.lado3 && this.lado1 + this.lado3 > this.lado2 && this.lado2 + this.lado3 > this.lado1;
    }
}

class Livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor (titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo;
        this.autor = autor;
        this. anoPublicacao = anoPublicacao;
    }

    exibirInformacoesLivro(): void{
        console.log(`este livro possui o titulo ${this.titulo}, o autor ${this.autor} e publicado em ${this.anoPublicacao} `);

    }
}

class Agenda{
    contatos: {nome: string, numeroTelefone: string}[];

    constructor (){
        this.contatos = [];
    }

    adicionarContato(nome: string, numeroTelefone: string): void {
        const novoContato = { nome, numeroTelefone };
        this.contatos.push(novoContato);
        console.log(`Contato ${nome}, ${numeroTelefone} adicionado com sucesso.`);
    }

    listarContatos (): void{
        for (let i = 0; i < this.contatos.length; i++) {
            const contato = this.contatos[i];
            console.log(`[${i + 1}] Nome: ${contato.nome}, Telefone: ${contato.numeroTelefone}`);
        }       
    }

    removerContato (indice: number): void {
        if (indice >= 0 && indice < this.contatos.length) {
            const contatoRemovido = this.contatos.splice(indice, 1);
            console.log(`Contato ${contatoRemovido[0].nome} removido com sucesso!`);
          } else {
            console.log("Contato não encontrado");
        }
    }
}

class Carro {
    marca: string;
    modelo: string;
    ano: number;
    
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
    
    acelerar(): void {
      console.log("Acelerando o carro...");
    }
  }
  
class CarroEsportivo extends Carro{
    constructor(marca: string, modelo: string, ano: number){
        super(marca, modelo, ano );
    }

    acelerarRapidamente(): void {
        console.log("Acelerando rapidamente o carro esportivo!");
    }

    produzirSomEsportivo(): void {
        console.log("Produzindo um som esportivo... Vroom Vroom!");
    }
}