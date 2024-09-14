document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serverName = document.getElementById('server-name').value;
    const botPrefix = document.getElementById('bot-prefix').value;
    console.log('Server Name:', serverName);
    console.log('Bot Prefix:', botPrefix);
    alert('Settings saved!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    console.log('Contact Name:', name);
    console.log('Contact Email:', email);
    console.log('Contact Message:', message);
    alert('Message sent!');
});
