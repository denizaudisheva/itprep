function sendMail() {
    emailjs.send("service_g08pqfc", "template_2dlf4zw", {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    });
}
