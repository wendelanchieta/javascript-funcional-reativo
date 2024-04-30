/*setTimeout(function () {
  console.log("Executando calback...");

  setTimeout(function () {
    console.log("Executando calback...");

    setTimeout(function () {
      console.log("Executando calback...");
    }, 2000);
  }, 2000);
}, 2000);*/

function esperarPor(temmpo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando a promise...");
      resolve();
    }, temmpo);
  });
}

esperarPor(3000)
  .then(() => esperarPor())
  .then(esperarPor);
