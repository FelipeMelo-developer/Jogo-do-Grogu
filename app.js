let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

function exibirTextoNaTela (tag, texto) {
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibriMensagemInicial() {
    exibirTextoNaTela ('h1','Jogo do número secreto do Grogu');
    exibirTextoNaTela ('p','Escolha um número entre 1 e 100');
}

exibriMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas =`Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}, parabéns🥳!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O número secreto é menor');  
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparcampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}

function limparcampo() {
            chute = document.querySelector('input');
            chute.value = '';   
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibriMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
