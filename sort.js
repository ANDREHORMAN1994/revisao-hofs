// Precisamos que eles estejam ordenados em ordem alfabetica.

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

const ordenaEstudantes = (lista, type, column) => {
  if (type === 'asc') {
    lista
      .sort((a, b) => a[column] > b[column] ? 1 : -1);
  } else {
    lista
      .sort((a, b) => a[column] < b[column] ? 1 : -1);
  }
}

// ordenaEstudantes(estudantes, 'xablau', 'status');
// console.log(estudantes);


// SORT EXEMPLO
const arrayNumerico = [10, 2, 13, 15, 8]
  // .sort((a, b) => a < b ? 1 : -1)
  .sort((a, b) => a - b)

const arrayLetras = ['casa', 'amor', 'abacate', 'zeus', 'felicidade', 'xablau']
// .sort((a, b) => a > b ? 1 : -1)
  .sort((a, b) => b.localeCompare(a))
