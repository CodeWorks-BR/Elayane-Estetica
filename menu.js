// Seleção de elementos
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.getElementById('btn-fechar');

// Abrir o menu
btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('ativo');
  overlay.classList.add('ativo');
});

// Fechar o menu ao clicar no botão fechar
btnFechar.addEventListener('click', () => {
  menuMobile.classList.remove('ativo');
  overlay.classList.remove('ativo');
});

// Fechar o menu ao clicar fora do menu (overlay)
overlay.addEventListener('click', () => {
  menuMobile.classList.remove('ativo');
  overlay.classList.remove('ativo');
});
