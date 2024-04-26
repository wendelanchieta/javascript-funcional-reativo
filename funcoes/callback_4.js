const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;
const somar = (acc, el) => {
  //console.log(acc, el);
  return acc + el;
};

const totalGeral = carrinho.map(getTotal).reduce(somar);
console.log(totalGeral);

//Implementação de um reduce
Array.prototype.meuReduce = function (fn, inicial) {
  let acumulador = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acumulador && i === 0) {
      acumulador = this[i];
      continue;
    }

    acumulador = fn(acumulador, this[i], this);
  }
  return acumulador;
};

const totalGeral2 = carrinho.map(getTotal).meuReduce(somar);
console.log("==>", totalGeral);
