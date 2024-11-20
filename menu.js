//Tema Claro/Escuro

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // Salva a escolha do tema no localStorage
  if (html.classList.contains('light')) {
      localStorage.setItem('theme', 'light');  // Salva 'light' se o tema for claro
  } else {
      localStorage.setItem('theme', 'dark');   // Salva 'dark' se o tema for escuro
  }
}

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');  // Recupera o tema salvo no localStorage

  // Se houver um tema salvo, aplica ele
  if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
  } else if (savedTheme === 'dark') {
      document.documentElement.classList.remove('light');
  }
});


//Icon Brilho

var MenuItem = document.querySelectorAll('.item-menu')
function linkselec () {
  MenuItem.forEach((item) => item.classList.remove('active'))
  this.classList.add('active')
}
MenuItem.forEach((item) => item.addEventListener('click', linkselec))


//Expandir Menu

var btnExp = document.querySelector('#btn-exp')
var menuLateral = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
  menuLateral.classList.toggle('expandir')
})


//Adicionar, Remover e Salvar Posts

const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const addPostButton = document.getElementById('add-post-btn');
const postsContainer = document.getElementById('posts-container');

//Função para adicionar um novo post
addPostButton.addEventListener('click', () => {
  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();

  if (title === '' || content === '') {
    alert('Por favor, preencha o título e o conteúdo do post.');
    return;
  }

  // Cria o elemento do post
  const postElement = document.createElement('div');
  postElement.className = 'post';

  postElement.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="delete-btn">Excluir</button>
  `;

  // Adiciona o evento de exclusão ao botão
  postElement.querySelector('.delete-btn').addEventListener('click', () => {
    postsContainer.removeChild(postElement);
  });

  // Adiciona o post ao container
  postsContainer.appendChild(postElement);

  // Limpa os campos de entrada
  postTitleInput.value = '';
  postContentInput.value = '';
});
