document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.submit-btn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            await emailjs.sendForm(
                'service_65o5gvd', // Your EmailJS service ID
                'template_vvwn539', // Your EmailJS template ID
                contactForm
            );
            
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    });
});
