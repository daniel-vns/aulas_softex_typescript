const aluno: Object = {nome: "daniel", idade: 20};

let num: number = 20.366666666;

let txt: string = " Ola meu caro ";

let valor: string = num.toFixed(4);
num = parseInt(valor);

console.log(num.toFixed());
console.log(num.toPrecision());

let ABC = num.toString();
console.log(typeof ABC);
console.log(ABC);

console.log(txt);
let mudar: string = txt.trim();
console.log(mudar);

console.log(mudar.charAt(1));

console.log(mudar.concat(", tudo bem?"));
console.log(mudar.indexOf("a"));
console.log(mudar);
console.log(mudar.lastIndexOf("a"));

console.log(mudar.slice(4, 9));

let array: Array<string | number> = ["maçã", "pera", "uva", "banana"];

array.push("kiwi");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("laranja", "limão");
console.log(array);

let abc: string = array.join("?");
console.log(abc);

let array1: Array<number> = [1,2,3,4];

let array2: Array<number | string> = array.concat(array1);
console.log(array2);
console.log(array);
array.splice(1, 1);
console.log(array);
array.splice(0, 1, "ovo");
console.log(array);

enum Jogador {
    goleiro,
    lateral,
    defensor,
    meioDeCampo,
    atacante,
}

enum Esporte {
    volei,
    futebol,
    natacao,
    mma,
    basquete,
}