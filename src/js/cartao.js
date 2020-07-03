// retirado no exercicio 20 da apostila
//; (function () {
//    const cartoes = document.querySelectorAll(".cartao")

//    for (let i = 0; i < cartoes.length; i++) {
//        const cartao = cartoes[i]

//        cartao.addEventListener("focusin", function () {
//            cartao.classList.add("cartao--focado")
//        })
//        cartao.addEventListener("focusout", function () {
//            cartao.classList.remove("cartao--focado")
//        })
//        cartao.addEventListener("change", function mudaCor(event) {
//            const elementoSelecionado = event.target
//            const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
//            if (isRadioTipo) {
//                cartao.style.backgroundColor = elementoSelecionado.value
//            }
//        })

//        cartao.addEventListener("keydown", function deixaClicarComEnter(event) {
//            if (event.target.classList.contains("opcoesDoCartao-opcao")
//                && (event.key === 'Enter' || event.key === ' ')) {
//                event.target.click()
//            }
//        })       

//        cartao.addEventListener ('click', function(event) {
//            const elementoSelecionado = event.target
//            if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
//                cartao.classList.add("cartao--some")
//                cartao.addEventListener("transitionend", function(){
//                    cartao.remove()
//                })
//            }
//        })
//    }
//})()



// DOM ( Especifico do JavaScript )
// JavaScript é o único que roda no navegador e por isso existem problemas para rodar em diferentes
//navegadores pois engines
// Document Object Model ( Modelo de objeto do documento ) Representação do seu arquivo
// baixa o html - interpreta o html ( Parse ) - baixa tudo que esta no html na ordem que está no html
// DOM arquivo de texto

//Abas do console

//Elements mostra o Dom - Uma representação ( interpretação ) do arquivo, quando usamos javaScript nós manipulamos o DOM
// Sources vc altera o documento html