const readline = require("readline");

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

//obterResposta("Esse é um teste? ").then(console.log);

// Observer
function namorada() {
  setTimeout(() => {
    console.log("N: Apagar as luzes...");
    console.log("N: Pedir silêncio...");
    console.log("N: Surpresa!!!");
  }, 2000);
}

// Observer
//function sindico() {
function sindico(evento) {
  setTimeout(() => {
    console.log("S: Monitorando o barulho");
    console.log(`S: evento -> ${evento.resp}`);
    console.log(`evento -> ${evento.data}`);
  }, 1000);
}

// subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q)");
    if (resp.toLowerCase() === "s") {
      // os observadores são notificados
      /*(interessados || []).forEach((obs) => {
        obs();
      });*/
      (interessados || []).forEach((obs) => {
        obs({ resp, data: Date.now() });
      });
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/*
    Chmada da função -> Registra dois observadores!
    Os observadores são: [namorada, sindico]
    O subject é o porteiro!
*/
porteiro([namorada, sindico]);
