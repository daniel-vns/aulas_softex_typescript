class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senhaSuperSecreta123";
  
    private constructor() {
      // Construtor privado para evitar a criação direta de instâncias.
    }
  
    public static getInstance(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
        SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta. Missão cumprida, agente!");
      } else {
        console.log("Senha incorreta. Acesso negado. Intruso detectado!");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto = SistemaSeguranca.getInstance();
  
  // Tentativa de acesso com senha correta
  agenteSecreto.acessarBaseSecreta("senhaSuperSecreta123");
  
  // Tentativa de acesso com senha incorreta
  agenteSecreto.acessarBaseSecreta("senhaIncorreta456");
  