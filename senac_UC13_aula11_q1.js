/**
 * A função gerenciarTarefas serve para criar um array, adicionar três tarefas no array, excluir a ultima atividade adicionada e mostrar o array
* @param {Array<String>} tarefas obrigatorio , um vetor vazio para armazernar informações
*
* @returns {Array<String>} retorna um array ao final da função
*/
function gerenciarTarefas() {
    
    var tarefas = [];

    tarefas.push('Molhar', 'Limpar', 'Secar');

    tarefas.pop();

    console.log(tarefas);
}

gerenciarTarefas();

