
// get localstorage data in employee list
function showdata() {
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
    <td><a href="/employee/Edit.html?id=${Person[i].id}"><i class="fa-solid fa-pen-to-square" style = "float: left"></i></a>
        <a href="#" onClick="deletePost(${Person[i].id})"><i class="fa-solid fa-trash-can" style = "float: right"></i></a>
    </td></tr>`;
  };
};

// dalete data in employee list 
function deletePost(id) {
  let Employeessd = JSON.parse(localStorage.getItem("Employees"));
  for (let i = 0; i < Employeessd.length; i++) {
    if (Employeessd[i].id == id) {
      Employeessd.splice(i, 1);
      localStorage.Employees = JSON.stringify(Employeessd);
    };
  };
  document.querySelector("tbody").innerHTML = "";
  showdata();
};
