// Object.freeze garante a imutabilidade do Objeto
const pessoa = Object.freeze({
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
  end: Object.freeze({
    rua: "Feliz",
  }),
});

// Atribuição por referência
const outraPessoa = pessoa;

// Passagem por referência (função inpura)
function alterarPessoa(pessoa) {
  const novaPessoa = { ...pessoa }; // Clone raso, spreed
  novaPessoa.nome = "Joana";
  novaPessoa.altura = 1.8;
  novaPessoa.cidade = "Olinda";
  novaPessoa.end.rua = "ABC";
  return novaPessoa;
}

// Atribuição por valor
let a = 3;
let b = a;

a++;
b--;

console.log(a, b);

const novaPessoa = alterarPessoa(pessoa);

console.log("outraPessoa: ", outraPessoa);
console.log("novaPessoa:  ", novaPessoa);
