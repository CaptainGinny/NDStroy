document.addEventListener('DOMContentLoaded', () => {
  const openPopupBtn = document.getElementById('openPopupBtn');
  const popup = document.getElementById('popup');
  const closePopupBtn = document.querySelector('.close');

  openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    document.body.classList.add('lock-scroll');
  });

  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.classList.remove('lock-scroll');
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.classList.remove('lock-scroll');
    }
  });
});
