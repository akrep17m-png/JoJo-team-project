window.addEventListener('load', () => {
  const welcome = document.createElement('div');
  welcome.className = 'welcome-screen';
  welcome.innerHTML = `
    <div class="welcome-content">
      <h1 class="welcome-title">Welcome to</h1>
      <img src="${import.meta.env.BASE_URL}logo.png" width="542" height="232" alt="JoJo Coffee Logo" class="welcome-logo">
      <p class="welcome-text">Savor the Essence of Specialty Coffee</p>
    </div>
  `;

  document.body.appendChild(welcome);

  const audio = new Audio('${import.meta.env.BASE_URL}jojo-intro.mp3');
  audio.volume = 0.6;

  // пробуємо програти одразу
  audio.play().catch(() => {
    // якщо браузер заблокував — програємо при першій взаємодії
    const unlock = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
  });

  setTimeout(() => {
    welcome.classList.add('hide');
  }, 4500);

  setTimeout(() => {
    welcome.remove();
  }, 5000);
});

/* localStorage.removeItem("jojo-visited"); - тест в DevTools */
