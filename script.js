// script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const sendBtn = document.getElementById('sendBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Change button text
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    
    // Create the email content
    const subject = `New Message from ${name} - Vision Spark Website`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    // Create a mailto link (this will open the user's default email client)
    const mailtoLink = `mailto:ayan.footy567@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open the email client
    try {
        window.location.href = mailtoLink;
        
        // Show success message
        formMessage.textContent = 'Thank you! Your email client should open with the message ready to send.';
        formMessage.className = 'form-message success';
        
        // Reset form
        document.getElementById('contactForm').reset();
    } catch (error) {
        formMessage.textContent = 'Error: Could not open email client. Please email us directly at ayan.footy567@gmail.com';
        formMessage.className = 'form-message error';
    } finally {
        sendBtn.textContent = 'Send Message';
        sendBtn.disabled = false;
    }
});