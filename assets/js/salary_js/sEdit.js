// salary edit form ma data set karva mate
function editOnlod_sal() {
    var E_salary = [];
    let id = window.location.search.substring(1);
    for (let i = 0; i < id.length; i++) {
        let key = id.split("=");
        if (1 < key.length) {
            key[0] = key[1];
        }
        id = key[0];
    };

    E_salary = JSON.parse(localStorage.getItem("sal_Employee"));
    for (let i = 0; i < E_salary.length; i++) {
        if (E_salary[i].id == id) {
            console.log("it's jsan data", E_salary[i]);

            document.getElementById("Employee_name").value = E_salary[i].Employee_name;
            document.getElementById("salary").value = E_salary[i].salary;
            document.getElementById("date").value = E_salary[i].date;

        };
    };
};
// submit button on click apdate function
function empl_sal_update() {
    event.preventDefault();
    sal_resroreData();
    document.getElementById("employee_salary_form").reset();
};

// edit form ma set data ne reupdate karva mate
function sal_resroreData() {
    let id = window.location.search.substring(1);
    for (let i = 0; i < id.length; i++) {
        let key = id.split("=");
        if (1 < key.length) {
            key[0] = key[1];
        };
        id = key[0];
    };

    let E_salary = JSON.parse(localStorage.getItem('sal_Employee'));
    for (let i = 0; i < E_salary.length; i++) {
        if (E_salary[i].id == id) {
            E_salary[i].Employee_name = document.getElementById('Employee_name').value;
            E_salary[i].salary = document.getElementById("salary").value;
            E_salary[i].dale = document.getElementById("date").value;

            localStorage.sal_Employee = JSON.stringify(E_salary);
        };
    };
};
