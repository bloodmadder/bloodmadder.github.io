document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, есть ли на странице галерея
  if (!document.querySelector('.gallery-grid')) return;

  // Создаем модальное окно
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  
  const modalImg = document.createElement('img');
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';

  modal.appendChild(closeBtn);
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // Функция для открытия изображения
  function openModal(imgSrc, imgAlt) {
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    document.body.style.overflow = 'hidden';
  }

  // Функция для закрытия
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Обработчики событий
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => openModal(img.src, img.alt));
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => e.target === modal && closeModal());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeModal());
});