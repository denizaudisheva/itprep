function sendMail() {
    emailjs.send("service_g08pqfc", "template_2dlf4zw", {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    });
}
function sendMail() {
    emailjs
        .send("service_g08pqfc", "template_2dlf4zw", {
            name: document.getElementById("name").value,
            message: document.getElementById("message").value,
        })
        .then(
            function (response) {
                // Показываем сообщение об успешной отправке
                document.getElementById("successMessage").style.display =
                    "block";

                // Очищаем форму
                document.getElementById("name").value = "";
                document.getElementById("message").value = "";

                // Через 3 секунды убираем сообщение
                setTimeout(() => {
                    document.getElementById("successMessage").style.display =
                        "none";
                }, 3000);
            },
            function (error) {
                alert("Ошибка при отправке. Попробуйте снова!");
            }
        );
}
