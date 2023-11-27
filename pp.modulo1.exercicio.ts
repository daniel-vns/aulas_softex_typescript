class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaSecreta: string;

  private constructor() {
      this.senhaSecreta = 'senhaSuperSecreta'; // Defina a senha secreta aqui
  }

  public static getInstancia(): SistemaSeguranca {
      if (!SistemaSeguranca.instancia) {
          SistemaSeguranca.instancia = new SistemaSeguranca();
      }
      return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senha: string): string {
      if (this.senhaSecreta === senha) {
          return 'Acesso concedido à Base Secreta.';
      } else {
          return 'Acesso negado à Base Secreta.';
      }
  }
}

// Programa principal
const sistema = SistemaSeguranca.getInstancia();
console.log(sistema.acessarBaseSecreta('senhaErrada')); // Deve imprimir 'Acesso negado à Base Secreta.'
console.log(sistema.acessarBaseSecreta('senhaSuperSecreta')); // Deve imprimir 'Acesso concedido à Base Secreta.'

