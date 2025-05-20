const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Загружаем тему из localStorage, если есть
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-bs-theme', savedTheme);
}

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
