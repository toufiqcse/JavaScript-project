function getUser() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUser(data));
}

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function displayUser(data) {
  const ul = document.getElementById("user-list");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `User name: ${user.username}
    email: ${user.email}`;
    ul.appendChild(li);
  }
}
