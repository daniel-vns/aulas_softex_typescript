// Interface comum para produtos
interface Computer {
    getRAM(): number;
    getHDD(): number;
    getCPU(): number;
    getType(): string;
    toString(): string;
  }
  
  // Implementação da classe PC que implementa a interface Computer
  class PC implements Computer {
    private ram: number;
    private hdd: number;
    private cpu: number;
  
    constructor(ram: number, hdd: number, cpu: number) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    getRAM(): number {
      return this.ram;
    }
  
    getHDD(): number {
      return this.hdd;
    }
  
    getCPU(): number {
      return this.cpu;
    }
  
    getType(): string {
      return 'PC';
    }
  
    toString(): string {
      return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
  }
  
  // Implementação da classe Server que implementa a interface Computer
  class Server implements Computer {
    private ram: number;
    private hdd: number;
    private cpu: number;
  
    constructor(ram: number, hdd: number, cpu: number) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    getRAM(): number {
      return this.ram;
    }
  
    getHDD(): number {
      return this.hdd;
    }
  
    getCPU(): number {
      return this.cpu;
    }
  
    getType(): string {
      return 'Server';
    }
  
    toString(): string {
      return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
  }
  
  // Fábrica para criar instâncias de computadores com base no tipo
  class ComputerFactory {
    createComputer(type: string, ram: number, hdd: number, cpu: number): Computer {
      if (type === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador desconhecido');
      }
    }
  }
  
  // Cliente
  const factory = new ComputerFactory();
  const pc = factory.createComputer('PC', 8, 256, 3.2);
  const server = factory.createComputer('Server', 32, 1000, 2.5);
  
  console.log(pc.toString());
  console.log(server.toString());
  
