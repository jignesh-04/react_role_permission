import React, { useEffect, useState, createContext } from "react";
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Aside from '../Component/Aside'
import Navbar from '../Component/Navbar';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import PostService from "../Services/PostService";


const permisionAccess = createContext();

const List = () => {
    let navigate = useNavigate();

    const [access_perm, setAccess_perm] = useState([])

    useEffect(() => {
        let id = JSON.parse(localStorage.getItem("user"));
        // console.log("id?.role_id", id)
        if (id !== undefined && id !== null) {
            PostService.role_show_edit(id.role_id)
                .then((res) => {
                    setAccess_perm(res.permission.map((Elem) => {
                        return Elem.name
                    }))
                })
        }
    }, [])

    return (
        <div className="hold-transition sidebar-mini">
            <ToastContainer />
            <div className="wrapper">

                <Navbar />

                <Aside perms={access_perm} />

                <div className="content-wrapper">
                    <permisionAccess.Provider value={access_perm}>
                        <Outlet />
                    </permisionAccess.Provider>

                    <aside className="control-sidebar control-sidebar-dark">
                        <div className="p-3">
                            <h5>Title</h5>
                            <p>Sidebar content</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}
export default List;
export { permisionAccess }