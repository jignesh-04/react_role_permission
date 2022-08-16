// get employee name in salary form
window.addEventListener("load", function () {
    debugger
    const sForm = document.getElementById("employee_salary_form");
    sForm.addEventListener("submit", function (event) {
        event.preventDefault();

        sal_data_store()
        document.getElementById("employee_salary_form").reset(); //submit after reset form

    });
    //data local storage ma set karva mate
    function sal_data_store() {
        // let sal_form = document.getElementById("employee_salary_form");
        var sal_Employee = [];
        if (localStorage.getItem(sal_Employee) == null) {
            sal_Employee = JSON.parse(localStorage.getItem("sal_Employee"));
        }
        const data_employee = {
            id: Math.floor((1 + Math.random()) * 0x10000),
            Employee_name: Employee_name.value,
            salary: salary.value,
            date: date.value
        };
        sal_Employee.push(data_employee);
        localStorage.setItem("sal_Employee", JSON.stringify(sal_Employee));
    };
});

// employee name get by localstorage
function salary_emp() {

    var sal_emp = JSON.parse(localStorage.getItem("Employees"));

    for (let i = 0; i < sal_emp.length; i++) {
        document.querySelector(
            "select"
        ).innerHTML += `<option>${sal_emp[i].fname}</option>`;
    }
    console.log(sal_emp);
};



