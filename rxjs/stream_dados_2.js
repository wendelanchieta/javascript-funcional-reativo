function gerarElementos(array) {
  return {
    iniciar(fn) {
      let indice = 0;
      const i = setInterval(() => {
        if (indice >= array.length) {
          clearInterval(i);
        } else {
          fn(array[indice]);
          indice++;
        }
      }, 1000);

      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = gerarElementos(numeros);

const exec11 = temp1.iniciar((numero) => {
  console.log(`#1.1: ${Math.pow(2, numero)}`);
}, 1000);

setTimeout(() => {
  exec11.parar();
}, 4000);

gerarElementos(["Daiane", "Marina", "Sabrina"]).iniciar(console.log);

gerarElementos([
  ["Daiane", "Marina", "Sabrina"],
  ["Jose", "Luiz", "Manuel"],
  [1, 2, 3],
]).iniciar(console.log);
