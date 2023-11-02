import * as readline from 'readline-sync';

// Passo 1: Definir a classe base Editor
class Editor {
  private observers: Function[] = [];

  subscribe(observer: Function) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Function) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(event: string, data: any) {
    for (const observer of this.observers) {
      observer(event, data);
    }
  }
}

// Passo 2: Criar a subclasse TextEditor

class TextEditor extends Editor {
  private lines: string[] = [];

  insertLine(lineNumber: number, text: string) {
    if (lineNumber >= 0 && lineNumber <= this.lines.length) {
      this.lines.splice(lineNumber, 0, text);
      this.notify('lineInserted', { lineNumber, text });
    } else {
      console.log('Número de linha inválido');
    }
  }

  removeLine(lineNumber: number) {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      const removedLine = this.lines.splice(lineNumber, 1)[0];
      this.notify('lineRemoved', { lineNumber, text: removedLine });
    } else {
      console.log('Número de linha inválido');
    }
  }

  getLines() {
    return this.lines;
  }
}

// Passo 3: Criar um TextEditor e configurar eventos

const textEditor = new TextEditor();

textEditor.subscribe((event, data) => {
  if (event === 'lineInserted') {
    console.log(`Linha ${data.lineNumber} inserida: ${data.text}`);
  } else if (event === 'lineRemoved') {
    console.log(`Linha ${data.lineNumber} removida: ${data.text}`);
  }
});

// Passo 4: Receber entradas do usuário e operações no TextEditor

console.log('Editor de Texto Simples - Digite as linhas de texto ou "EOF" para sair.');

let lineNumber = 0;
while (true) {
  const input = readline.question(`Linha ${lineNumber + 1}: `);
  if (input === 'EOF') {
    break;
  }

  textEditor.insertLine(lineNumber, input);
  lineNumber++;
}

// Passo 5: Imprimir o conteúdo e salvar

console.log('Conteúdo do Arquivo:');
const lines = textEditor.getLines();
for (let i = 0; i < lines.length; i++) {
  console.log(`Linha ${i + 1}: ${lines[i]}`);
}

// Disparar evento "save"
textEditor.notify('save', lines);
