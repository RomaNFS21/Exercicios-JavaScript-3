/**
* A função jogoAdivinhacao realiza um sorteio de um numero aleatorio entre 0 e 10 e solicita ao usuario um numero no mesmo intervalo a função so para quando o usuario acerta o numero gerado pelo programa
*
* @param {Number} numeroMaquina assume um valor gerado randomicamente para ser a resposta
* @param {Number} numeroJogador "recebe" um valor escolhido para o usuario na tentativa de ser o mesmo do sistema
*
* @returns {String} Retorna uma mensagem que errou o numero enquanto não informar o numero correto, em caso de ser o mesmo numero é apresentado uma mensagem que acertou o numero e o programa se encerra
*/
function jogoAdivinhacao() {

    var numeroMaquina = Math.floor(Math.random() * 11);
    var numeroJogador = Math.floor(Math.random() * 11);
    
    while (numeroJogador != numeroMaquina ) {
        console.log("Você errou o numero! informe outro. ")
        numeroJogador = Math.floor(Math.random() * 11);
        
    }

    console.log("Você acertou o numero !")
    }
    jogoAdivinhacao();