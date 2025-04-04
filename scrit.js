// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const sendBtn = document.getElementById('sendBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Change button text
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.sendForm('service_kkgps9l', 'template_7khjlsi', this)
        .then(function() {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'form-message success';
            document.getElementById('contactForm').reset();
        }, function(error) {
            formMessage.textContent = 'Failed to send message. Please try again later.';
            formMessage.className = 'form-message error';
            console.error('Failed:', error);
        })
        .finally(function() {
            sendBtn.textContent = 'Send Message';
            sendBtn.disabled = false;
        });
});