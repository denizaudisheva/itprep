<?php
// Проверяем, что форма была отправлена
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы и защищаем их
    $name = htmlspecialchars($_POST['name']);
    $review = htmlspecialchars($_POST['review']);
    
    // Указываем адрес электронной почты, на который будут приходить отзывы
    $to = "denizaudiseva@gmail.com";  // Замени "your_email@example.com" на свой реальный адрес
    $subject = "Новый отзыв от $name";  // Тема письма
    $message = "Имя: $name\n\nОтзыв: $review";  // Сообщение, содержащее имя и отзыв
    
    // Заголовки письма (от кого будет отправлено)
    $headers = "From: ITPREPFRATION";  // Замените на реальный домен вашего сайта
    
    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Спасибо за ваш отзыв!";  // Уведомление об успешной отправке
    } else {
        echo "Произошла ошибка при отправке.";  // Уведомление о неудаче
    }
}
?>
