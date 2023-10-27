// class Quarto {
//     constructor(public numero: number){}
// }
// class Banheiro{
//     constructor(public numero: number){}
// }

// class Sala{
//     constructor(public numero: number){}
// }

// class Cozinha{
//     constructor(public tamanho: number){}
// }

// class Casa{
//     private quartos: Quarto[];
//     private banheiros: Banheiro[];
//     private salas: Sala[];
//     private cozinha: Cozinha;

//     constructor(){
//         this.quartos = [new Quarto(1), new Quarto(2), new Quarto(3), new Quarto(4)];
//         this.banheiros = [new Banheiro(1), new Banheiro(2)];
//         this.salas = [new Sala(1), new Sala(2)];
//         this.cozinha = new Cozinha(100);
//     }

//     verificarQuartos(){
//         for (const quarto of this.quartos){
//             console.log(`Quarto ${quarto.numero} em bom estado`);
//         }
//     }

//     verificarBanheiros(){
//         for (const banheiro of this.banheiros){
//             console.log(`Banheiro ${banheiro.numero} em bom estado`);
//         }
//     }

//     verificarSalas(){
//         for (const sala of this.salas){
//             console.log(`Sala ${sala.numero} em bom estado`);
//         }
//     }

//     verificarCozinha(){
//         console.log(`Cozinha de tamanho ${this.cozinha.tamanho} em bom estado`);
//     }
// }

// function main() {
//     const minhacasa = new Casa();
//     minhacasa.verificarQuartos();
//     minhacasa.verificarBanheiros();
//     minhacasa.verificarSalas();
//     minhacasa.verificarCozinha();
// }
  
// main();

export interface TipoCarro {
    marca: string;
    modelo: string;
}

export class Carro {
    private tipoCarro: TipoCarro;
  
    constructor(tipoCarro: TipoCarro) {
        this.tipoCarro = tipoCarro;
    }
}

class Sedan implements TipoCarro{
    constructor(public marca: string, public modelo: string){
        console.log(`carro Sedan da marca ${this.marca} e modelo ${this.modelo}`);
    }
}

class SUV implements TipoCarro{
    constructor(public marca: string, public modelo: string){
        console.log(`carro SUV da marca ${this.marca} e modelo ${this.modelo}`);
    }
}

function main(){
    const meucarro = new Carro(new Sedan("fiat", "palio"));
    const meucarro1 = new Carro(new SUV("chevrolet", "toro"));
}

main();