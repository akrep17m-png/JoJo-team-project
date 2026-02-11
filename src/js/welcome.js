window.addEventListener('load', () => {
  const hasVisited = localStorage.getItem('jojo-visited');

  if (hasVisited) return; // якщо вже був — нічого не показуємо

  const welcome = document.createElement('div');
  welcome.className = 'welcome-screen';
  welcome.innerHTML = `
    <div class="welcome-content">
      <h1 class="welcome-title">Welcome to</h1>
      <svg class="welcome-logo" width="84" height="36" aria-label="Company Logo">
        <use href="/images/icons.svg#icon-logo"></use>
      </svg>
      <p class="welcome-text">Savor the Essence of Specialty Coffee</p>
    </div>
  `;

  document.body.appendChild(welcome);

  setTimeout(() => {
    welcome.classList.add('hide');
  }, 4500);

  setTimeout(() => {
    welcome.remove();
    localStorage.setItem('jojo-visited', 'true');
  }, 5000);
});
