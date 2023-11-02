import * as readline from 'readline-sync';

// Passo 1: Definir a interface Strategy
interface MathOperationStrategy {
  execute(num1: number, num2: number): number;
}

// Passo 2: Implementar as classes concretas para as operações

class AdditionOperation implements MathOperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class SubtractionOperation implements MathOperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class MultiplicationOperation implements MathOperationStrategy {
  execute(num1: number, num2: number): number {
    return num1 * num2;
  }
}

// Passo 3: Criar a classe da calculadora que usa a estratégia

class Calculator {
  private strategy: MathOperationStrategy;

  setStrategy(strategy: MathOperationStrategy) {
    this.strategy = strategy;
  }

  calculate(num1: number, num2: number): number {
    if (!this.strategy) {
      throw new Error('Strategy not set');
    }
    return this.strategy.execute(num1, num2);
  }
}

// Passo 4: Entrada do usuário e uso da calculadora

const calculator = new Calculator();

const num1 = parseFloat(readline.question('Digite o primeiro número: '));
const num2 = parseFloat(readline.question('Digite o segundo número: '));
const operation = readline.question('Digite a operação (+ para adição, - para subtração, * para multiplicação): ');

let strategy: MathOperationStrategy;

if (operation === '+') {
  strategy = new AdditionOperation();
} else if (operation === '-') {
  strategy = new SubtractionOperation();
} else if (operation === '*') {
  strategy = new MultiplicationOperation();
} else {
  console.error('Operação não suportada');
  process.exit(1);
}

calculator.setStrategy(strategy);
const result = calculator.calculate(num1, num2);

console.log(`Resultado: ${result}`);
