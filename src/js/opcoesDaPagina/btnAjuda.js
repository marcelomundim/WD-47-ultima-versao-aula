//; (function () {
//    const btnAjuda = document.querySelector('#btnAjuda')
//    btnAjuda.addEventListener("click", function () {
//        //pegador de ajudas
//        const ajudas = [
//            { conteudo: "Bem Vindo ao Ceep", cor: "#F05450" }
//            , { conteudo: "Clique no botão Linhas para alterar o layout", cor: "#92C4EC" }
//        ]
//        ajudas.forEach(function (ajuda) {
//            adicionaCartaoNoMural(ajuda)
//        })
//    })
//    btnAjuda.classList.remove('no-js')
//})()

//mudança de codigo do exercicio 25


; (function () {
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function () {
        //pegador de ajudas
        
        
 //       const xhr = new XMLHttpRequest()
 //       xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
 //       xhr.responseType = "json"
 //       xhr.send()
 //       xhr.addEventListener("load", function(){
 //           const objeto = xhr.response 
 //           const ajudas = objeto.instrucoes
//
//            ajudas.forEach(function(ajuda){
//                adicionaCartaoNoMural(ajuda)
//            })
//        })


// pode ser feira com uma promise

fetch('https://ceep.herokuapp.com/cartoes/instrucoes')
    .then(function (response){
        return response.json()
    })
    .then(function(response){
        response.instrucoes.forEach(function (ajuda){
            adicionaCartaoNoMural(ajuda);
        });
    })

           
    });
    btnAjuda.classList.remove('no-js')
})()


//.node_modules/.bin/babel
//    src // pasta onde estão meus arquivos
//    out-dir dist // output directory
//    copy-files // 
//    --watch // ele atualiza o arquivo sempre que é salvo
//    presets-env