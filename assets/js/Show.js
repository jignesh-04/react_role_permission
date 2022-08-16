function onlydata() {
    var Person = JSON.parse(localStorage.getItem("Employees"));
  
    for (let i = 0; i < Person.length; i++) {
      document.querySelector("tbody").innerHTML += `<tr>
      <td>${Person[i].id}</td>
      <td>${Person[i].fname}</td>
      <td>${Person[i].phone}</td>
      <td>${Person[i].email}</td>
      <td>${Person[i].password}</td>
      <td>${Person[i].gender}</td>
      <td>${Person[i].hobbies}</td>
      <td>${Person[i].Experiance}</td>
      </tr>`;
    };
  };

