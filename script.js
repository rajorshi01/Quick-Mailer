emailjs.init("ff98SB3ag5AbV6Fbr");
const sendButton = document.querySelector('.send-button');
const result = document.querySelector('.result');

sendButton.addEventListener('click', sendEmail);

function sendEmail()
{
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_jhn9hbn", "template_ernv81j", {
        to_email: to,
        subject: subject,
        message: message
    }).then(function () {
        result.innerHTML = "Your Email Has Been Sent!";
        result.style.opacity = 1;

    }, function (error) {
        result.innerHTML = "Invalid Input";
        result.style.opacity = 1;
        console.log(error);
    });
}