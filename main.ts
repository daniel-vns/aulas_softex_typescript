const numero: number = 10;
const texto: null = null;
const palavra: string = "olá";
const verdadeiro: boolean = true;
const lista: Array<string> = ["maçã", "pera"];
const objeto: Object = {nome: "daniel", idade: 20};


enum tipoDeConta {
    Professor,
    Aluno,
    Diretor,
}

function verificarTipoDeConta(usuario: tipoDeConta): void{
    if(usuario ===tipoDeConta.Diretor) {
        console.log("Permissão total");
    }else if (usuario === tipoDeConta.Professor){
        console.log("Permissão dos materiais de aula");
    }else{
        console.log("permissão aos exercícios");
    }
}
    verificarTipoDeConta(tipoDeConta.Diretor);