let listaDenumerosSorteado = [];
let chute = 0;
let tentativa = 1;
let limiteDeNumerosDoArray = 100;
let numeroSecreto = gerarNumeroAleatorio();

console.log("Número secreto: " + numeroSecreto);

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Adivinhe o número de 0 a 100');

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function verificarChute()
{
    chute = parseInt(document.getElementById('chute').value);

    if (chute == numeroSecreto)
    {
        finlizacaoGameVitoria();
    } 
    else if(chute > numeroSecreto)
    {
        mensagemMenor();
    }
    else if(chute < numeroSecreto)
    {
        mensagemMaior();
    }
    else
    {
        alert("Erro");
    }

    tentativa++;
}

function reiniciarjogo()
{

    
    numeroSecreto = gerarNumeroAleatorio();

    console.log("Novo número secreto: " + numeroSecreto);
    document.getElementById('reiniciar').disabled = true;
    document.getElementById('chute').value = "";

    tentativa = 1;

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Adivinhe o número de 0 a 100');
}


function mensagemMaior() {
    alert("O número secreto é maior");
}

function mensagemMenor() {
    alert("O número secreto é menor");
}

function finlizacaoGameVitoria() {
    exibirTextoNaTela('h1', "Acertou");
    exibirTextoNaTela('p', `Parabéns, você acertou o número secreto: ${numeroSecreto}\n Tentativas: ${tentativa}`);
    document.getElementById('reiniciar').disabled = false;
}

function gerarNumeroAleatorio()
{  
    let novoNumero = parseInt(Math.random() * limiteDeNumerosDoArray + 1);
    let quantidadeDeElementosNaLista = listaDenumerosSorteado.length;

    if(quantidadeDeElementosNaLista == limiteDeNumerosDoArray)
    {
        listaDenumerosSorteado = [];
    }

    if(listaDenumerosSorteado.includes(novoNumero))
    {
        return gerarNumeroAleatorio()
    }
    else
    {
        listaDenumerosSorteado.push(novoNumero);
        console.log(listaDenumerosSorteado);
        return novoNumero;
    }
}


/*function mostrarMensagem(tipo) {
    switch(tipo) {
        case 'maior':
            mensagem.innerHTML = "O número secreto é maior";
            break;
        case 'menor':
            mensagem.innerHTML = "O número secreto é menor";
            break;
        case 'acertou':
            mensagem.innerHTML = "Parabéns, você acertou!";
            break;
        default:
            mensagem.innerHTML = "Erro";
    }
} 
    
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let mensagem = document.querySelector('p');
mensagem.innerHTML = 'Escolha um número de 1 a 100';*/

