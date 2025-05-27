document.getElementById('applicationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь можно добавить обработку формы
            alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });