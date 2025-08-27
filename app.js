let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do Número Secreto";

let chute = 0;
let tentativa = 1;
let numeroSecreto = parseInt(Math.random()* 100 + 1);
console.log("Número secreto: " + numeroSecreto);


function verificarChute()
{
    chute = parseInt(document.getElementById('chute').value);

    if (chute == numeroSecreto)
    {
        alert("Parabéns, você acertou");
        alert("Tentativas: " + tentativa);
        document.getElementById('reiniciar').disabled = false;
    } 
    else if(chute > numeroSecreto)
    {
        alert("O número secreto é menor");
    }
    else if(chute < numeroSecreto)
    {
        alert("O número secreto é maior"); 
    }
    else
    {
        alert("Erro");
    }

    tentativa++;
}

function reiniciarjogo()
{
    numeroSecreto = parseInt(Math.random()* 100 + 1);
    console.log("Novo número secreto: " + numeroSecreto);
    document.getElementById('reiniciar').disabled = true;
    document.getElementById('chute').value = "";
    tentativa = 0;
}
