const loadsBuddies = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((data) => displayBuddies(data));
};

loadsBuddies();
const displayBuddies = (object) => {
  console.log(object);
  const buddiesObject = object.results;
  let tableData = "";
  buddiesObject.map((values) => {
    tableData += `
            <tr>
                <td>${values.name.first}</td>
                <td>${values.login.username}</td>
                <td>${values.email}</td>
                <td>${values.dob.date}</td>
                <td>${values.gender}</td>
                <td>${values.dob.age}</td>
                <td>${values.location.country}</td>
                <td>
                    <img src="${values.picture.thumbnail}">
                </td>
            </tr>
            `;
    console.log(tableData);
  });
  document.getElementById("table-body").innerHTML = tableData;
};
