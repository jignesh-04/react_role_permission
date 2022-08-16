// get data in localestorage and show only
function showdata() {
  var Person = JSON.parse(localStorage.getItem("sal_Employee"));

  for (let i = 0; i < Person.length; i++) {
    document.querySelector("tbody").innerHTML +=
      `<tr>
        <td>${Person[i].id}</td>
        <td>${Person[i].Employee_name}</td>
        <td>${Person[i].salary}</td>
        <td>${Person[i].date}</td>
      </tr>`;
  };
};