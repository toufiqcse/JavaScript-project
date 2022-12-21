fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let tableData = "";
    objectData.map((productValues) => {
      tableData += `
         <tr> 
            <td>${productValues.id}</td>
            <td>${productValues.title}</td>
            <td>${productValues.price}</td>
            <td>${productValues.description}</td>
            <td>
                <img src="${productValues.image}">
            </td>
         </tr>        
         `;
    });
    document.getElementById("table-body").innerHTML = tableData;
  });
