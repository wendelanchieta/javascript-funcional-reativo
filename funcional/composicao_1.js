function composicao(...fns) {
  return function (valor) {
    // reduce(acumulador, funcao atual)
    return fns.reduce((acc, fn) => {
      // é passado o valor do acumulador para a proxima função
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function tornarLento(texto) {
  return texto.split("").join(" ");
}

const exageado = composicao(gritar, enfatizar, tornarLento);
const umPoucoMenosExageado = composicao(gritar, enfatizar);

const resultado1 = exageado("para");
const resultado2 = umPoucoMenosExageado("Cuidado com o buraco");

console.log(resultado1);
console.log(resultado2);
