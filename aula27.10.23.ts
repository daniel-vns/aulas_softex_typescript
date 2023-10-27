class Quarto {
    constructor(public quantidade: number){}
}
class Banheiro{
    constructor(public quantidade: number){}
}

class Sala{
    constructor(public quantidade: number){}
}

class Cozinha{
    constructor(public tamanho: number){}
}

class Casa{
    private quartos: Quarto[];
    private banheiros: Banheiro[];
    private salas: Sala[];
    private cozinha: Cozinha;

    constructor(){
        this.quartos = [new Quarto(1), new Quarto(2), new Quarto(3), new Quarto(4)];
        this.banheiros = [new Banheiro(1), new Banheiro(2)];
        this.salas = [new Sala(1), new Sala(2)];
        this.cozinha = new Cozinha(100);
    }

    verificarQuartos(){
        for (const quarto of this.quartos){
            console.log(`Quarto ${quarto.quantidade} em bom estado`);
        }
    }

    verificarBanheiros(){
        for (const banheiro of this.banheiros){
            console.log(`Banheiro ${banheiro.quantidade} em bom estado`);
        }
    }

    verificarSalas(){
        for (const sala of this.salas){
            console.log(`Sala ${sala.quantidade} em bom estado`);
        }
    }

    verificarCozinha(){
        console.log(`Cozinha de tamanho ${this.cozinha.tamanho} em bom estado`);
    }
}

function main() {
    const minhacasa = new Casa();
    minhacasa.verificarQuartos();
    minhacasa.verificarBanheiros();
    minhacasa.verificarSalas();
    minhacasa.verificarCozinha();
}
  
main();