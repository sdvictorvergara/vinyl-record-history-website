// Main script for contact form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    const confirmationMessage = document.createElement('p');

    // Style confirmation message
    confirmationMessage.style.color = 'green';
    contactForm.parentNode.insertBefore(confirmationMessage, contactForm.nextSibling);

    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset form fields
        contactForm.reset();

        // Display confirmation message
        confirmationMessage.textContent = '¡Mensaje enviado correctamente!';
    });
});