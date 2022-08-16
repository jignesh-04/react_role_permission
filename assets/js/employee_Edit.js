// edit form ma data set karva male
function editOnlod() {
  // id match karva mate
  var Employees = [];
  let id = window.location.search.substring(1);
  for (let i = 0; i < id.length; i++) {
    let key = id.split("=");
    if (1 < key.length) {
      key[0] = key[1];
    };
    id = key[0];
  };

  Employees = JSON.parse(localStorage.getItem("Employees")); // localstorage data get and store Employee object
  for (let i = 0; i < Employees.length; i++) {
    if (Employees[i].id == id) {
      document.getElementById("fname").value = Employees[i].fname;
      document.getElementById("phone").value = Employees[i].phone;
      document.getElementById("email").value = Employees[i].email;
      document.getElementById("password").value = Employees[i].password;
      document.getElementById("Experiance").value = Employees[i].Experiance;

      if (Employees[i].gender[0] == "Male") {
        document.getElementById("Male").checked = true;
      } else {
        document.getElementById("Female").checked = true;
      };

      for (var j = 0; j < Employees[i].hobbies.length; j++) {
        if (Employees[i].hobbies[j] == "Reading") {
          document.getElementById("hobbies1").checked = true;
        };
        if (Employees[i].hobbies[j] == "Music") {
          document.getElementById("hobbies2").checked = true;
        };
        if (Employees[i].hobbies[j] == "Sports") {
          document.getElementById("hobbies3").checked = true;
        };
      };
    };
  };
};

// submit button on click apdate function
function update() {
  event.preventDefault(); //not page refresh
  restoreData();
};

// edit form ma set data ne reupdate karva mate
function restoreData() {
  let id = window.location.search.substring(1);
  for (let i = 0; i < id.length; i++) {
    let key = id.split("=");
    if (1 < key.length) {
      key[0] = key[1];
    };
    id = key[0];
  };

  let Employeessd = JSON.parse(localStorage.getItem("Employees"));
  debugger
  for (let i = 0; i < Employeessd.length; i++) {
    if (Employeessd[i].id == id) {
      Employeessd[i].fname = document.getElementById("fname").value;
      Employeessd[i].phone = document.getElementById("phone").value;
      Employeessd[i].email = document.getElementById("email").value;
      Employeessd[i].password = document.getElementById("password").value;
      Employeessd[i].Experiance = document.getElementById("Experiance").value;
     
      if (Employeessd[i].gender[0] !== "Male") {
        Employeessd[i].gender = document.getElementById("Male").value;
      } else {
        Employeessd[i].gender = document.getElementById("Female").value;
      };

      
      localStorage.Employees = JSON.stringify(Employeessd);
    };
  };
  document.getElementById("employee_edit_form").reset();
};
