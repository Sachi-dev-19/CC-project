const users = [];

function addUser() {
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value.trim();

  if (username) {
    users.push(username);
    alert(`User "${username}" added!`);
    usernameInput.value = "";
  } else {
    alert("Please enter a username.");
  }
}

function fetchUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  if (users.length === 0) {
    userList.innerHTML = "<li>No users found.</li>";
    return;
  }

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
  });
}
