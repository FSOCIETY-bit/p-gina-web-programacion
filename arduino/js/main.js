const menuBtn = document.querySelector('.menu-btn');
const modoBtn = document.querySelector('.modo-btn');
const sidebar = document.getElementById('sidebar');
const tabs = document.querySelectorAll('.tab');
const categorias = document.querySelectorAll('.categoria');

// Abrir/cerrar menú lateral
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Cambiar modo claro/oscuro con persistencia
modoBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('modo', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Cargar modo guardado
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('modo') === 'light') {
    document.body.classList.add('light');
  }
});

// Cambiar pestañas
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

  tabs.forEach(t => {
      const isActive = t === tab;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive);
      if (isActive) t.focus(); // foco para accesibilidad
    });

    categorias.forEach(cat => {
      cat.hidden = cat.id !== ${target}-section;
    });

    sidebar.classList.remove('open');
  });
});

// Mejora: cerrar sidebar al hacer click fuera de él (en móvil)
document.addEventListener('click', e => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});