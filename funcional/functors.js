/*
    Functors são objetos que implementam a função MAP
    que também é um "Wrapper" de um valor

    Array é um exemplo de Functor
*/
const nums = [1, 2, 3, 4, 5, 6];
const novosNums = nums.map((el) => el + 10).map((el) => el * 2);

console.log(nums, novosNums);

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null);
      } else {
        const novoValor = fn(this.valor);
        return TipoSeguro(novoValor);
      }
    },
    faltMap(fn) {
      return this.map(fn).valor;
    },
  };
}

const original = "Esse é um texto";
const alterado = TipoSeguro(original)
  .map((t) => t.toUpperCase())
  //.map((t) => null)
  .map((t) => `${t}!!!`)
  .faltMap((t) => t.split("").join(" "));

console.log(original, alterado);
