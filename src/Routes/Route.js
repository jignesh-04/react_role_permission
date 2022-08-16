
import RoleDashbord from '../Pages/Role/RoleDashbord';
import Dashbord from '../Pages/Student/Dashbord';
import StudentForm from '../Pages/Student/studentForm/StudentForm'
import UserDashbord from '../Pages/Users/UserDashbord';
import UserForm from '../Pages/Users/usersForm/UserForm';
import RoleForm from '../Pages/Role/RolForm.js/RoleForm';
import PermisionDashbord from '../Pages/Permision/PermisionDashbord';
import permisionForm from '../Pages/Permision/Permission/permisionForm';

const routes = [
    
    {
        path: "/student",
        component: Dashbord,
        permission: "view student",

    },
    {
        path: "/StudentForm",
        component: StudentForm,
        permission: "add student",

    },
    {
        path: "/StudentForm/:id",
        component: StudentForm,
        permission: "edit student",

    },

    {
        path: "/Users",
        component: UserDashbord,
        permission: "view user",
    },
    {
        path: "/UserForm",
        component: UserForm,
        permission: "add user",

    },
    {
        path: "/UserForm/:id",
        component: UserForm,
        permission: "edit user",

    },

    {
        path: "/Role",
        component: RoleDashbord,
        permission: "view Role",

    },
    {
        path: "/RoleForm",
        component: RoleForm,
        permission: "add Role",

    },
    {
        path: "/RoleForm/:id",
        component: RoleForm,
        permission: "edit Role",

    },
    
    {
        path: "/Permision",
        component: PermisionDashbord,
        permission: "view Permision",

    },
    {
        path: "/PermisionForm",
        component: permisionForm,
        permission: "add Permision",

    },
    {
        path: "/PermisionForm/:id",
        component: permisionForm,
        permission: "edit Permision",

    },
    

];

export default routes;