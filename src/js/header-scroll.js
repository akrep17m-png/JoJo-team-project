(() => {
  const header = document.querySelector('.js-header');
  if (!header) return;

  const SCROLL_OFFSET = 50;   // коли вмикати shrink
  const HIDE_OFFSET = 120;    // після якої прокрутки дозволяти ховати
  const DELTA = 8;            // ігнор дрібного “шевеління”

  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;

    // shrink after offset
    header.classList.toggle('is-scrolled', y > SCROLL_OFFSET);

    // ignore tiny scroll changes
    if (Math.abs(y - lastY) < DELTA) {
      ticking = false;
      return;
    }

    const scrollingDown = y > lastY;

    // hide only after user passed HIDE_OFFSET
    if (y > HIDE_OFFSET && scrollingDown) {
      header.classList.add('is-hidden');
    } else {
      header.classList.remove('is-hidden');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  // initial state
  update();
})();
