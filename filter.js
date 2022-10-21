// precisamos encontrar quais pessoas estudantes não terminaram o projeto ainda, com status menor que 80

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

const procurandoEstudantes = (lista) => {
  const estudantesFiltrados = lista
    .filter(({ status }) => status > 80);
  return estudantesFiltrados;
};

// console.log(procurandoEstudantes(estudantes));


// FILTER EXEMPLO
const array = [1, 2, 3].filter((item) => false);
