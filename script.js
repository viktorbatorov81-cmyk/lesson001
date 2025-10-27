// Ждем, пока весь HTML-документ загрузится
document.addEventListener('DOMContentLoaded', function() {
    
    // Находим нашу кнопку по ID
    const button = document.getElementById('myButton');
    
    // Добавляем к кнопке "слушатель" события 'click'
    button.addEventListener('click', function() {
        // Это действие произойдет при клике
        alert('Привет! Вы нажали на кнопку!');
    });
});