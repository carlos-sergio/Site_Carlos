// script.js

// Aguarda até que o DOM seja completamente carregado antes de executar o código interno
document.addEventListener('DOMContentLoaded', function () {

    // Obtém a referência ao elemento HTML com o id 'profession'
    const professionElement = document.getElementById('profession');

    // Array de profissões que serão alternadas
    const professions = ['Desenvolvedor Java', 'Analista de Suporte em TI', 'Desenvolvedor Web'];

    // Índice que rastreia a posição atual no array de profissões
    let currentIndex = 0;

    // Função que altera dinamicamente a profissão exibida
    function changeProfession() {
        // Define o conteúdo do elemento para a profissão atual no array
        professionElement.textContent = professions[currentIndex];

        // Atualiza o índice para apontar para a próxima profissão no array
        currentIndex = (currentIndex + 1) % professions.length;
    }

    // Inicia o processo de troca de profissão a cada 2 segundos (2000 milissegundos)
    setInterval(changeProfession, 2000);
});