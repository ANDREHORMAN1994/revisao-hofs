// precisamos saber a media dos status da turma

const estudantes = [
  {
   nome: 'Joel',
   Projeto: 'TrybeWallet',
   status: 78,
 },
 {
   nome: 'André',
   Projeto: 'TrybeWallet',
   status: 60,
 },
 {
   nome: 'Bruno',
   Projeto: 'TrybeWallet',
   status: 97,
 },
 {
   nome: 'Daniel',
   Projeto: 'TrybeWallet',
   status: 100,
 },
 {
   nome: 'Pedro',
   Projeto: 'TrybeWallet',
   status: 100,
 },
];

const calculaMedia = (lista) => {
  const soma = lista
    .reduce((acc, { status }) => acc + status, 0);
  // console.log(soma);
  return soma / lista.length;
};

// console.log(calculaMedia(estudantes));


// REDUCE EXEMPLO
const soma = [2, 3, 4]
  .reduce((acc, curr) => {
    // if (acc.soma) {
    //   acc.soma = acc.soma + curr;
    // } else {
    //   acc.soma = curr
    // }
    acc.soma += curr;
    return acc;
  }, { soma: 0 });
