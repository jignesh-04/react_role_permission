import Title from '../CRUD/Title'
import Form from '../CRUD/Form';
import List from '../CRUD/List';


const routes = [
    {
        path: "/",
        component: Title,
    },
    {
        path: "/form",
        component: Form,    
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/form/:id",
        component: Form, 
    }
];
export default routes;