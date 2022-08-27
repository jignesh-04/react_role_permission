import DashbordList from "../Pages/DashbordList";
import StudentForm from "../Pages/StudentForm";
import UserForm from "../Pages/UserForm";

const routes = [
  {
    path: "/student",
    component: DashbordList,
  },
  {
    path: "/studentform",
    component: StudentForm,
  },
  {
    path: "/userform",
    component: UserForm,
  },
];
export default routes;
