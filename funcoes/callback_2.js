const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;

const dobroMaisIndice = (n, i) => n * 2 + i;

const dobroMaisIndiceMaisTamanhoArray = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

console.log(nums.map(dobroMaisIndice));

console.log(nums.map(dobroMaisIndiceMaisTamanhoArray));
/**********************************************************/

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const primeiraLetra = (text) => text[0];
const letras = nomes.map(primeiraLetra);

console.log(nomes, letras);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;

console.log(carrinho.map(getNome));

const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.map(getTotal);

console.log(totais);

//Implementação de um MAP
Array.prototype.meuMap = function (fn) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this);
    novoArray.push(resultado);
  }

  /*for(let el of this) {
        fn()
    }*/
  return novoArray;
};

// Executando o meu Map
console.log("meuMap=> ", carrinho.meuMap(getNome));

console.log("meuMap=> ", carrinho.meuMap(getTotal));
