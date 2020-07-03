// 01 - ideia original

//const btn=document.querySelector('.opcoesDoCartao-remove');

// btn.addEventListener('click', function(){
//   this.parentNode.parentNode.remove();


// 02 - Colocando o btn dentro da funcao por causa do conflito com nbtn do outro arquivo

//function remove ( ){
//    const btn=document.querySelector('.opcoesDoCartao-remove');

// btn.addEventListener('click', function(){
//   this.parentNode.parentNode.remove();
//});
//};

//remove();


// 03-solução quase final - funcionando só no primeiro card

//(function ( ){
//    const btn=document.querySelector('.opcoesDoCartao-remove');
//
//    btn.addEventListener('click', function(){
//   this.parentNode.parentNode.remove();
//});
//})();

//IIFE
// Immediately invoke function expression

// usando a classe e apagando 1 card

// (function () {
//     const btn = document.querySelector('.opcoesDoCartao-remove');

//     btn.addEventListener('click', function () {
//         const cartao = this.parentNode.parentNode;
//         cartao.classList.add('cartao--some');
//         cartao.addEventListener('transitionend', function () {
//             cartao.remove();
//         })
//     });
// })();


// usando o querySelectorAll para apagar todos e chamar de bts pq são vários
// fazer um laço de repetição for

// (function () {
//     const btns = document.querySelectorAll('.opcoesDoCartao-remove');
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function () {
//             const cartao = btns[i].parentNode.parentNode;
//             cartao.classList.add('cartao--some');
//             cartao.addEventListener('transitionend', function () {
//                 cartao.remove();
//             })
//         });
//     }
// })();

//Arquivo excluido no exercicio 17

