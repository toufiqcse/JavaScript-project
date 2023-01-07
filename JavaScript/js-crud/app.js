// @ts-nocheck
//add data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //get data from field

  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const rollNo = document.querySelector("#roll-no");
  //validate
  // @ts-ignore
  if (firstName == "" || lastName == "" || rollNo == "") {
    // @ts-ignore
    showAlert("Please field in the all ", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${rollNo}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a> 
        </td>

        `;
      list.appendChild(row);
      showAlert("Student Added", "Success");
    } else {
      selectedRow.children[0].textContent = firstName;
      selectedRow.children[1].textContent = lastName;
      selectedRow.children[2].textContent = rollNo;
      showAlert("Student info edited", "info");
    }
  }
});
