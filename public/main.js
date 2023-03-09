const socket = io();
const messages = document.getElementById('messages');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input')
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
})
socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.innerText = msg;
    messages.appendChild(li);
});