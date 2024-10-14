function composicao(...fns) {
  return function (valor) {
    // reduce(acumulador, funcao atual)
    return fns.reduce(async (acc, fn) => {
      // é passado o valor do acumulador para a proxima função
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto.split("").join(" "));
    }, 3000);
  });
}

const exageado = composicao(gritar, enfatizar, tornarLento);
const umPoucoMenosExageado = composicao(gritar, enfatizar);

exageado("para").then(console.log);
umPoucoMenosExageado("Cuidado com o buraco").then(console.log);
