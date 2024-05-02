class Produto {
  constructor(nome, preco, desc) {
    this._nome = nome;
    this.preco = preco;
    this.desc = desc;
  }

  precoFinal() {
    return this.preco * (1 - this.desc);
  }

  get nome() {
    return `Produto: ${this._nome}`;
  }

  set nome(novoNome) {
    this._nome = novoNome.toLocaleUpperCase();
  }

  get precoFinal1() {
    return this.preco * (1 - this.desc - 0.05);
  }
}

const p1 = new Produto("Caneta", 10);
console.log(p1);
p1.nome = "caneta";
console.log(p1.nome);

const p2 = new Produto("Geladeira", 3000, 0.8);
console.log(`Preço final ${p2.precoFinal()}`);

console.log(`Preço final + 5% de desconto: ${p2.precoFinal1}`);
