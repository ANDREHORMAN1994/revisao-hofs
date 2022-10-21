// precisamos criar um novo array onde cada elemento seja o nome e o status de cada pessoa

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

const novaLista = (lista) => {
  const listaEditada = lista
    .map(({nome, status}) => ({nome, status}));

  return listaEditada;
};

// console.log(novaLista(estudantes));


// MAP EXEMPLO
const array = [1, 2, 3]
  .map((item, index, array) => ({ numero: item }));
