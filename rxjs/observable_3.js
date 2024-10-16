/*
    Desafio!
    Criar uma Stream de numeros
    Entre min e max com Observable!
*/
const { Observable, noop } = require("rxjs");

function entre(min, max) {
  return new Observable((subscribe) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscribe.next(min + i);
      });
    /* //Alternativa
    for (let i = min; i <= max; i++) {
      subscribe.next(i);
    }*/
    subscribe.complete();
  });
}

entre(4, 10).subscribe(
  (num) => console.log(`num = ${num}`),
  noop,
  () => console.log("Fim!")
);
