window.addEventListener("load", function () {
  //Access the form element
  const form = document.getElementById("employee_form");
  //take over submit event
  addEventListener("submit", function (event) {
    event.preventDefault(); //not page refresh

    //check validation
    let is_validate = validateData();
    console.log("before", is_validate);
    if (is_validate) {
      return true;
    };

    store();  // filup data store for localstorage function 
    document.getElementById("employee_form").reset(); //submit after reset form
  });

  // funcation validation
  function validateData() {
    let element = document.querySelectorAll(".validate");
    console.log("element is ***", element);
    let flag = false;

    for (let i = 0; i < element.length; i++) {
      // id concat 
      let p_elemet_id = "error_" + element[i].id;

      if (element[i].value == "") {
        let flag = true;
        //show error
        document.getElementById(p_elemet_id).classList.remove("hide");
      } else {
        //hide error
        document.getElementById(p_elemet_id).classList.add("hide");
      };
    };

    // checkbox validation
    checkbox = document.querySelectorAll(".hobbies");
    let p_elemet_id = "error_hobbies";
    let hobbies_flag = false;

    for (let i = 0; i < checkbox.length; i++) {
      hobbies_flag = true;

      if (checkbox[i].checked == true) {
        hobbies_flag = false;
        document.getElementById(p_elemet_id).classList.add("hide");
        break;
      } else {
        document.getElementById(p_elemet_id).classList.remove("hide");
      };
    };
    return flag || hobbies_flag;
  };

  // data store in localstorage
  function store() {

    let form_1 = document.getElementById("employee_form");
    let data = new FormData(form_1);

    var Employees = [];

    if (localStorage.getItem("Employees")) {
      Employees = JSON.parse(localStorage.getItem("Employees"));
    };
    const employee = {
      id: Math.floor(Date.now() / 100),
      fname: fname.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      gender: data.getAll("Gender"),
      hobbies: data.getAll("hobbies"),
      Experiance: Experiance.value,
    };

    Employees.push(employee);   //employee data add for Employee = []
    localStorage.setItem("Employees", JSON.stringify(Employees));   //Employee = [data] cunvert in string and store localstorage

    console.log(employee);
  };
});

