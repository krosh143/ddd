// Мобильное меню
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Форма обратной связи (можно подключить AJAX)
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});

// Обработка кнопок показа отзывов
        document.querySelectorAll('.toggle-reviews').forEach(btn => {
            btn.addEventListener('click', function() {
                const reviews = this.nextElementSibling;
                reviews.classList.toggle('active');
                this.textContent = reviews.classList.contains('active') ? 'Скрыть отзывы' : 'Показать отзывы';
            });
        });