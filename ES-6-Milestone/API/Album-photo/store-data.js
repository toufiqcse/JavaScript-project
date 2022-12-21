fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
      tableData += `
        
        <tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>
                <img src="${values.url}">
            </td>
        </tr>
        `;
    });
    document.getElementById("table-body").innerHTML = tableData;
  });
