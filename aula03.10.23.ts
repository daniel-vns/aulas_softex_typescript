function saudacao(): void {
    console.log("Olá, mundo!"); 
}
saudacao();

function dobro(num: number): void {
    console.log(num * 2);    
}
dobro(2);

function mostrarNumeros(inicio: number, fim: number): void {
    let i: number;
    for(i = inicio; i<=fim; i++){
        console.log(i);
    }
}
mostrarNumeros(1, 10);

function verificarPar (numero: number): void {
    numero%2===0 ? console.log("é par") : console.log("é impar");
}
verificarPar(2);

function imprimirLista (array: Array<number>): void {
    let i: number;
    for(i=0; i<array.length; i++){
        console.log(array[i]);
    }
}
imprimirLista([1,2,3,4,5,6,7,8]);

let numeros: Array<number> = [1,2,3,4,5,6,7,8,9,10];
function calcularMedia(numeros: Array<number>): void {
    let soma: number = 0;
    let media: number;
    for(let i=0; i<numeros.length; i++){
        soma += numeros[i];
    }
    media = soma/numeros.length;
    console.log(media);
}
calcularMedia(numeros);

function maiorNumero(numero: Array<number>): void {
    let maior: number = 0;
    for(let i=0; i<numero.length; i++){
        if (numero[i]> maior){
            maior = numero[i];
        }
    }
    console.log(maior);
}
maiorNumero([11,2,3,4,5,6,7,8,9]);

function contaVogais(string: string): void {
    let cont = 0;
    string=string.toLowerCase();
    for(let i=0; i<string.length; i++){
        if(string.charAt(i)=="a"||string.charAt(i)=="e"||string.charAt(i)=="i"||string.charAt(i)=="o"||string.charAt(i)=="u"){
            cont++; 
        }
    }
    console.log(cont);
}
contaVogais("paralelepipedo");

function imprimirTabuada(num1: number): void{
    for(let i=1; i<=10; i++){
        let resultado: number = num1*i;
        console.log(`a tabuada de ${num1} x ${i} = ${resultado}`);
   }
}
imprimirTabuada(5);

function verificarPrimo(num2: number): boolean {
    for (let i = 2; i < num2; i++) {
       if(num2 % i === 0) {
         return false
       }
    }
    return num2 > 1;  
}
console.log(verificarPrimo(7));

function saudar(nome: string): void {
    console.log(`Olá!, ${nome}`)
}
saudar("Daniel");

function calculadora(num1: number, num2: number, op= "+"): void {
    switch(op){
        case "+":
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            console.log(num1/num2);
            break;
        default:
            console.log("digite a operação corretamente");
            break;
    }
}
calculadora(3,5);
calculadora(3,5,"-");
calculadora(3,5,"*");
calculadora(3,5,"/");

function contagemRegressiva(inicio=10): void {
    for(let i= inicio; i>=1; i--){
        console.log(i);
    }
}
contagemRegressiva(4);

function apresentacao(nome="douglas", idade=30, profissao="pedreiro"): void{
    console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
}
apresentacao();
apresentacao("daniel", 20, "engenheiro");

function mensagemPersonalizada(texto: string, estilo="normal"): void {
    switch(estilo){
        case"normal":
            console.log(texto);
            break;
        case"negrito":
            console.log(texto.bold());
            break;
        case"italico":
            console.log(texto.italics());
            break;
        default:
            console.log("digite o estilo correto");
            break;
    }
}
mensagemPersonalizada("tudo bem", "negrito");

function somar(a: number,b: number): number {
    return a+b;
}
console.log(somar(3,5));

function ehPar(numero: number): boolean{
     if(numero%2==0){
        return true;
     }else{
        return false;
     }
}
console.log(ehPar(3));

function maiorNumeroo(a: number,b: number,c: number): number {
     if(a>b && a>c){
        return a;
     }else if(b>a && b>c){
        return b;
     }else if (c>a && c>b){
        return c;
     }else{
        return;
    }
}
console.log(maiorNumeroo(6,3,4));

function calcularIMC(peso: number, altura: number): number{
     const imc = peso / (altura*altura);
     return imc;
}
console.log(calcularIMC(50, 1.80));

function contarVogal(texto: string): number {
    const vogais = "aeiouAEIOU";
    let i = 0;
    for(let letra of texto){
        if(vogais.includes(letra)){
            i++;
        }  
    }
    return i;
}
console.log(contarVogal("paralelepipedo"));

function celsiusParaFahrenheit(temperatura: number): number {
    const fahrenheit = (temperatura * 1.8) + 32;
    return fahrenheit;
}
console.log(celsiusParaFahrenheit(38));

function gerarSenha(tamanho: number) {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    return senha;
}
console.log(gerarSenha(5));