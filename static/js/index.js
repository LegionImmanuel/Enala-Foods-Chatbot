// Socket connection to the server
const socket = io();

// Query DOM elements
const input = document.getElementById("input");
const chatForm = document.getElementById("chat-form");
const btnBtn = document.getElementById("btnBtn");

// Helper function to append a message to the chat box
function appendMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.className = "message-text";
  messageElement.id = sender;
  messageElement.textContent = message;

  // get the current timestamp
  const now = new Date();

  // format the timestamp
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timestamp = `${hours}:${minutes}`;

  // add the timestamp to the chat message
  const timestampElement = document.createElement("span");
  timestampElement.className = "timestamp";
  timestampElement.textContent = timestamp;


  const messageContainer = document.createElement("div");
  const messageOuterContainer = document.createElement("div");
  messageContainer.className = "message-container " + sender;
  messageOuterContainer.className = "message-outer-container " + sender;
  messageElement.innerHTML = message.replace(/\n/g, "<br>");
  messageOuterContainer.appendChild(messageContainer);
  messageContainer.appendChild(messageElement);
  messageContainer.appendChild(timestampElement);
  chatForm.appendChild(messageOuterContainer);
  chatForm.scrollTop = chatForm.scrollHeight;
}

// Handling sending messages
function sendMessage() {
  const message = input.value;
  if (message === "") {
    return;
  }
  appendMessage(message, "user");
  socket.emit("user-message", message);
  input.value = "";
}

// Handling receiving messages from the server
socket.on("bot-message", (message) => {
  appendMessage(message, "bot");
});

// Attaching event listeners
btnBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});
