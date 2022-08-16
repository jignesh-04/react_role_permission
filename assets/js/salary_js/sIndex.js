// get localstorage data in employee salary list
function showdata() {
  var Person = JSON.parse(localStorage.getItem("sal_Employee"));

  for (let i = 0; i < Person.length; i++) {
    document.querySelector("tbody").innerHTML += `<tr>
      <td>${Person[i].id}</td>
      <td>${Person[i].Employee_name}</td>
      <td>${Person[i].salary}</td>
      <td>${Person[i].date}</td>
      <td><a href="/salary/sEdit.html?id=${Person[i].id}"><i class="fa-solid fa-pen-to-square" style = "float: left"></i></a>
          <a href="#" onClick="delete_emp_salary(${Person[i].id})" onclick=""><i class="fa-solid fa-trash-can" style = "float: right"></i></a>
      </td></tr>`;
  };
};

// dalete data in employee salary list 
function delete_emp_salary(id) {
  let E_salary = JSON.parse(localStorage.getItem("sal_Employee"));
  for (let i = 0; i < E_salary.length; i++) {
    if (E_salary[i].id == id) {
      E_salary.splice(i, 1);
      localStorage.sal_Employee = JSON.stringify(E_salary);
    };
  };
  document.querySelector("tbody").innerHTML = "";
  showdata();
};
