/**
* A função exibirPalavrasReverso cria um array palavras onde se armazena cinco informações e faz a exibição da ultima informação até a primeira
*
* @param {Array<String>} palavras Array de strings com cinco informações 
*
* @returns {Strings} É amostrado uma informação do array por vez na ordem reversa
*/
function exibirPalavrasReverso(palavras) {
    
var palavras = ["café", "livro", "código", "javascript", "aprendizado"]

for (let index = (palavras.length - 1) ; index > -1; index--) {
    console.log(palavras[index])
    
}

}
exibirPalavrasReverso();