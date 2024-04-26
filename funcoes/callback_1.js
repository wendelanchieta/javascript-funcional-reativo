const fs = require("fs");
const path = require("path");

//constante "__dirname" devolve uma string com o caminho do diretório atual
// A função "join" junta os vários caminhos, já adicionando a barra "/"
const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo);

console.log("Inicio Sync...");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sync...");
