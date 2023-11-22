const btn = document.getElementById('contactButton');
console.log(btn);
const form = document.getElementById('contactForm')
form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_9sorqkq';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Enviar';
            alert('Enviado! en cuanto lo vea me pondre en contacto.');
        }, (err) => {
            btn.value = 'Enviar';
            alert(JSON.stringify(err));
        });
});