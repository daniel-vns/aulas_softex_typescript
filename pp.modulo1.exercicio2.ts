abstract class Veiculo {
    modelo: string;
    marca: string;
    cor: string;
    numeroRodas: number;
  
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    abstract clone(): Veiculo;
    abstract represent(): string;
  }
  
  class Carro extends Veiculo {
    numeroPortas: number;
  
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, numeroPortas: number) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    clone(): Veiculo {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): string {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
    }
  }
  
  class Moto extends Veiculo {
    cilindrada: number;
  
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, cilindrada: number) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindrada = cilindrada;
    }
  
    clone(): Veiculo {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindrada);
    }
  
    represent(): string {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Cilindrada: ${this.cilindrada}`;
    }
  }
  
  class Aplicacao {
    static criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [];
      for (let i = 0; i < 3; i++) {
        const carro = new Carro(`Carro-${i}`, "MarcaCarro", "Vermelho", 4, 4 + i);
        veiculos.push(carro);
      }
      for (let i = 0; i < 3; i++) {
        const moto = new Moto(`Moto-${i}`, "MarcaMoto", "Azul", 2, 125 + 50 * i);
        veiculos.push(moto);
      }
      return veiculos;
    }
  
    static clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
      return veiculos.map((veiculo) => veiculo.clone());
    }
  
    static imprimirVeiculos(veiculos: Veiculo[]) {
      for (const veiculo of veiculos) {
        console.log(veiculo.represent());
      }
    }
  }
  
  const veiculos = Aplicacao.criarVeiculos();
  
  // Clonar os veículos
  const clones = Aplicacao.clonarVeiculos(veiculos);
  
  // Imprimir a representação dos clones
  Aplicacao.imprimirVeiculos(clones);
  