/* Mande parabéns para as pessoas que entregaram 100% dos projetos:

"Olá pessoa, parabéns por ter finalizado 100% do nomeDoPorjeto"
*/

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

const mandaParabens = (lista) => {
  lista.forEach(({status, nome}) => {
    if (status === 100) {
      const mensagem = `Olá ${nome}, parabéns por ter finalizado 100% do nomeDoPorjeto`

      console.log(mensagem);
    }
  })
};

// mandaParabens(estudantes);


// FOR EACH EXEMPLO
[1, 2, 3]
  .forEach((item) => item);
