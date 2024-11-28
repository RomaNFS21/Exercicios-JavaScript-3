/**
* A função calcularMediaAlunos cria dois arrays sendo um com o nome dos alunos e outro aninhado com as notas dos alunos, ele realiza a media das notas dos alunos e ao final apresenta o nome do aluno e sua media.
*
* @param {Array<String>} alunos Array com o nome dos alunos
* @param {Array<Number>} notas Array aninhado com as notas dos alunos
* @param {Number} mediaFinal recebe o valor da media das notas
* @param {Number} somaNotas recebe o valor da nota e soma com o valor anterior
* @param {Number} mediaNotas recebe o valor do somaNotas e divide pela quantidade de notas
* @param {number} i idex do contador do primeiro for
* @param {number} j index do contador do segundo for
* 
*
* @returns {String} Uma mensagem com o nome do aluno e sua media
*/

function calcularMediaAlunos() {

    var alunos = ['Ana' , 'Lucas', 'Sofia']
    var notas = [[7.2, 5.6, 9.1], [3.8, 8.4, 6.5], [2.9, 4.3, 7.7]]
    
    var mediaFinal = [];
    

    for (let i = 0; i < alunos.length; i++) {
        var somaNotas = 0;

        for (let j = 0; j < notas.length; j++ ){
            
            somaNotas = somaNotas + notas[i][j];
        }

        var mediaNotas = somaNotas / notas[i].length;
        mediaFinal[i] = mediaNotas;
        

        console.log(alunos[i], "media ", mediaFinal[i] )
    }
    
}
calcularMediaAlunos();


