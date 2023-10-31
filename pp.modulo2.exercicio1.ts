// Interface que define a estrutura básica de um sanduíche
interface Sanduiche {
    custo(): number;
    descricao(): string;
  }
  
  // Implementação concreta de um sanduíche de frango assado
  class FrangoAssado implements Sanduiche {
    custo(): number {
      return 4.50;
    }
  
    descricao(): string {
      return "Sanduíche de Frango Assado";
    }
  }
  
  // Decorator para adicionar ingredientes ao sanduíche
  abstract class Decorator implements Sanduiche {
    protected sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    custo(): number {
      return this.sanduiche.custo();
    }
  
    descricao(): string {
      return this.sanduiche.descricao();
    }
  }
  
  // Implementação concreta do ingrediente "Pepperoni"
  class Pepperoni extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricao(): string {
      return this.sanduiche.descricao() + ", Pepperoni";
    }
  }
  
  // Implementação concreta do ingrediente "Queijo Mussarela Ralado"
  class QueijoMussarelaRalado extends Decorator {
    custo(): number {
      return this.sanduiche.custo() + 2.00;
    }
  
    descricao(): string {
      return this.sanduiche.descricao() + ", Queijo Mussarela Ralado";
    }
  }
  
  // Criar um sanduíche de frango assado e decorá-lo com pepperoni e queijo mussarela ralado
  const meuSanduiche: Sanduiche = new FrangoAssado();
  const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(meuSanduiche));
  
  // Imprimir a descrição e o custo do sanduíche final.
  console.log(`${sanduicheDecorado.descricao()} custa $${sanduicheDecorado.custo().toFixed(2)}`);
  