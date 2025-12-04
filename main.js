// Show login page first
document.getElementById("loginBox").style.display = "block";

// Simulated active users
let active = Math.floor(Math.random() * 8) + 1;
document.getElementById("activeUsers").innerText = "Active: " + active;

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Enter username and password");
    return;
  }

  localStorage.setItem("kataUser", user);

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("chatBox").style.display = "block";

  active++;
  document.getElementById("activeUsers").innerText = "Active: " + active;
}

function sendMessage() {
  let msg = document.getElementById("chatInput").value;
  let user = localStorage.getItem("kataUser");

  if (msg.trim() === "") return;

  let chatBox = document.getElementById("messages");
  let div = document.createElement("div");

  // Check if the user is the owner
  if (user.toLowerCase() === "katakuri") {
    div.className = "msg owner-msg";
    div.innerHTML = `<span class="owner-tag">${user} (Owner)</span>
                     <span class="verified">✔</span>: ${msg}`;
  } else if (user.toLowerCase() === "Phantom") {
    div.className = "msg owner-msg";
    div.innerHTML = `<span class="owner-tag">${user} (Owner)</span>
                     <span class="verified">✔</span>: ${msg}`;
  }else {
    div.className = "msg";
    div.innerText = user + ": " + msg;
  }

  chatBox.appendChild(div);

  document.getElementById("chatInput").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}