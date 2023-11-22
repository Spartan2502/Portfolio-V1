



const btn = document.getElementById('contactButton');
const form = document.getElementById('contactForm')
form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_9sorqkq';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});


