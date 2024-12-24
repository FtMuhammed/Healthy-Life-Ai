const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    userInput.value = '';

    // Simulated bot response
    setTimeout(() => {
        appendMessage('bot', `You said: ${userMessage}`);
    }, 1000);
});

function appendMessage(sender, message) {
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.textContent = message;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
