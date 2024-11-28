/**
* A função gerenciarEstoque serve para criar o array estoque com quatro informações, realiza a troca do segundo item e no fim mostra o array final
*
* @param {Array<String>} estoque obrigatorio, é um array para guardar os produtos do estoque
*
* @returns {number} retorna o tamanho do array
*/
function gerenciarEstoque() {
    
    var estoque = ['Guarana', 'Batatinha', 'Sorvete', 'Energetico']

    estoque[1] = 'Cerveja'

    console.log(estoque.length)
}

gerenciarEstoque();
