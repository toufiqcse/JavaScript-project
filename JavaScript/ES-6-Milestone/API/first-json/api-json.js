// data load from API server
function loadUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  const userTable = document.getElementById("user-table");
  for (const user of data) {
    const th = document.createElement("th");
    const td = document.createElement("td");
    const tr = document.createElement("tr");
    th.innerText = " Name";
    td.innerText = "Email";
    userTable.appendChild(th);
    userTable.appendChild(td);
    td.innerText = user.name;
  }
}
