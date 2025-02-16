// Инициализация EmailJS
(function () {
    emailjs.init({
        publicKey: "XmbucBUA_IZZhLUQR",
    });
})();

// Обработчик формы
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            sendMail();
        });

    // Закрытие модального окна при клике на "×"
    document.querySelector(".close").onclick = function () {
        document.getElementById("feedbackModal").style.display = "none";
    };

    // Закрытие модального окна при клике вне него
    window.onclick = function (event) {
        let modal = document.getElementById("feedbackModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

// Функция отправки Email
function sendMail() {
    emailjs
        .send("service_g08pqfc", "template_2dlf4zw", {
            name: document.getElementById("name").value,
            message: document.getElementById("message").value,
        })
        .then(
            function () {
                // Показываем модальное окно
                document.getElementById("feedbackModal").style.display =
                    "block";

                // Очищаем форму
                document.getElementById("name").value = "";
                document.getElementById("message").value = "";
            },
            function () {
                alert("Ошибка при отправке. Попробуйте снова!");
            }
        );
}
