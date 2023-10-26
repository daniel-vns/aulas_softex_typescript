export interface IAnimal{
    nome: string,
    idade: number,
    cor?: string

    mover(): void;
    comer(): void;
} 

export class Cachorro implements IAnimal{
    constructor(public nome: string, public idade: number, public cor: string){}
        
    mover(): void{
        console.log(`${this.nome} corre muito rápido`);
    }
    
    comer(): void{
        console.log(`${this.nome} come muita racao`);
    }
}

export class Gato implements IAnimal{
    constructor(public nome: string, public idade: number){}
        
    mover(): void{
        console.log(`${this.nome} engatinha devagar`);
    }
    
    comer(): void{
        console.log(`${this.nome} come pouca racao`);
    }
}

function main(){
    const cachorro = new Cachorro ("Floque", 3, "branco");
    const gato = new Gato ("Mia", 12);

    console.log(cachorro);
    console.log(gato);
    cachorro.mover();
    cachorro.comer();
    gato.mover();
    gato.comer();
}

main();