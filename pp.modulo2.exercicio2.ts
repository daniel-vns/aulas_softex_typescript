// Classe alvo (Galinha)
class Galinha {
    cacarejar() {
      console.log("Cacarejando...");
    }
  }
  
  // Classe adaptada (Pato)
  class Pato {
    grasnar() {
      console.log("Grasnando...");
    }
    voar() {
      console.log("Voando...");
    }
  }
  
  // Interface que representa o comportamento de uma Galinha
  interface IGalinha {
    cacarejar(): void;
  }
  
  // Classe Adapter para adaptar um Pato para comportar-se como uma Galinha
  class AdapterPato implements IGalinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  }
  
  // Demonstração do uso do AdapterPato
  class AdapterPatoDemo {
    static main() {
      const pato = new Pato();
      const galinha = new Galinha();
  
      console.log("Comportamento de um Pato:");
      pato.grasnar();
      pato.voar();
  
      console.log("\nComportamento de uma Galinha:");
      galinha.cacarejar();
  
      console.log("\nPato adaptado para agir como uma Galinha:");
      const adapterPato = new AdapterPato(pato);
      adapterPato.cacarejar();
    }
  }
  
  AdapterPatoDemo.main();
  