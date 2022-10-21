/* Enviar msg para as pessoas que ainda não terminaram o projeto, o bot só consegue enviar uma msg por vez. 

"Olá pessoa, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?"
*/

let estudantes = [
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

const msgBot = (lista) => {
  const pessoa = lista
    .find(({ status }) => status < 80);

  estudantes = estudantes
    .filter((estudante) => estudante.nome !== pessoa.nome);
  
  const mensagem = `Olá ${pessoa.nome}, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?`;
  return mensagem;
};

// console.log(msgBot(estudantes));
// console.log(msgBot(estudantes));


// FIND EXEMPLO
const elemento = [1, 2, 3].find((item) => item === 2);
