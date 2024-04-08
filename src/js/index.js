/*
  Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
     Passo 2 - identificar o clique no botão 
    Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele.
   */


// console.log(document.querySelector('.btn-mostrar-projetos'));

// const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// console.log(botaoMostrarProjetos)


// const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// botaoMostrarProjetos.addEventListener('click', () => {console.log('test'); })



//   // Passo 3 - adicionar a classe ativo nos projetos escondidos 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativo = document.querySelectorAll('.projeto:not(.ativo)');

// console.log(projetosInativo)

botaoMostrarProjetos.addEventListener('click', () => {
  mostrarMAisProjetos();
  esconderBotao();
})

// FUNCTIONS

function mostrarMAisProjetos() {
  projetosInativo.forEach(projetosInativo => {
    projetosInativo.classList.add('ativo');
  });
}

function esconderBotao() {
  botaoMostrarProjetos.classList.add("remover");
}
