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
