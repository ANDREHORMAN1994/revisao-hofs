/* Temos uma lista com os dados de pessoas inscritas na nossa página e queremos mandar algum tipo de anuncio:

  "Beba Trybeer, suave como um log de erro vazio"
  "ChocoTrybe, melhor que console.log"

OBS: Não podemos mandar o de cerveja para menores de 18 anos
*/ 

const arrayIdades = [23, 32, 17, 16, 34];
const arrayIdades2 = [23, 32, 27, 46, 34];

const usandoSome = (lista) => {
  const verificaIdade = lista.some((idade) => idade < 18);

  if (!verificaIdade) {
    return "ChocoTrybe, melhor que console.log";
  }
  return "Beba Trybeer, suave como um log de erro vazio";
};

// console.log(usandoSome(arrayIdades));


const usandoEvery = (lista) => {
  const verificaIdade = lista.every((idade) => idade > 18);

  if (!verificaIdade) {
    return "ChocoTrybe, melhor que console.log";
  }
  return "Beba Trybeer, suave como um log de erro vazio";
};

// console.log(usandoEvery(arrayIdades));


// SOME EXEMPLO
const array1 = [1, 2, 3]
  .every((item) => item === 2);

// EVERY EXEMPLO
const array2 = [2, 2, 2]
  .every((item) => item === 2);
