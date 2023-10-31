// export class Cachorro{
//     constructor(public nome: string, public idade: number, public raca: string){}
// } 

import { hasOnlyExpressionInitializer } from "typescript";

// export class Gato{
//     constructor(public nome: string, public idade: number, public raca: string){}
// }

// export class Animal{
//     private cachorros: Cachorro[] = [];
//     private gatos: Gato[] = [];

//     addCachorro(cachorro: Cachorro){
//         this.cachorros.push(cachorro);
//     }

//     addGato(gato: Gato){
//         this.gatos.push(gato);
//     }

//     listarCachorro(){
//         console.log("\nTodos os cachorros cadastrados:\n");
//         for (const cachorro of this.cachorros){
//             console.log(`nome: ${cachorro.nome}, idade: ${cachorro.idade}, raça: ${cachorro.raca}`);
//         }
//     }
    
//     listarGato(){
//         console.log("\nTodos os gatos cadastrados:\n");
//         for (const gato of this.gatos){
//             console.log(`nome: ${gato.nome}, idade: ${gato.idade}, raça: ${gato.raca}`);
//         }
//     }
// }

// function main(){
//     const meuAnimal = new Animal();
//     const meuCachorro1 = new Cachorro ("Floque", 10, "Doberman");
//     const meuCachorro2 = new Cachorro ("Ursula", 5, "Shitzu");
//     const meuCachorro3 = new Cachorro ("Cristal", 15, "Pastor Alemão");

//     const meuGato1 = new Gato ("Mia", 1, "Persa");
//     const meuGato2 = new Gato ("Horacio", 3, "Siamês");
//     const meuGato3 = new Gato ("Ana", 8, "Angorá");

//     meuAnimal.addCachorro(meuCachorro1);
//     meuAnimal.addCachorro(meuCachorro2);
//     meuAnimal.addCachorro(meuCachorro3);

//     meuAnimal.addGato(meuGato1);
//     meuAnimal.addGato(meuGato2);
//     meuAnimal.addGato(meuGato3);

//     meuAnimal.listarCachorro();
//     meuAnimal.listarGato();
// }

// main()

export interface Heroi{
    nome: string;
    poder: string;
}

export class LigaDaJustica{
    private herois: Heroi[] = [];

    addHeroi(heroi: Heroi){
        this.herois.push(heroi);
    }

    listarHeroi(){
        console.log("\nTodos os herois cadastrados:\n");
        for (const heroi of this.herois){
            console.log(`nome: ${heroi.nome}, poder: ${heroi.poder}`);
        }
    }
}

export class SuperMan implements Heroi{
    constructor(public nome: string, public poder: string){}
}

export class BatMan implements Heroi{
    constructor(public nome: string, public poder: string){}
}

export class AquaMan implements Heroi{
    constructor(public nome: string, public poder: string){}
}

function main(){
    const ligaDaJustica = new LigaDaJustica();

    const meuheroi1 = new SuperMan("Clark Kent", "voar");
    const meuheroi2 = new BatMan("Bruce Wayne", "criar equipamentos avançados para lutar");
    const meuheroi3 = new AquaMan("Jason Mamoa", "criar poderes mágicos com seu tridente");

    ligaDaJustica.addHeroi(meuheroi1);
    ligaDaJustica.addHeroi(meuheroi2);
    ligaDaJustica.addHeroi(meuheroi3);

    ligaDaJustica.listarHeroi();
}

main()