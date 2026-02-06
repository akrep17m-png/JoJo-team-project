(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    link: document.querySelectorAll('.mobile-menu-nav-link'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.link.forEach(link => link.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
