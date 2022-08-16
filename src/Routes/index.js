import React, { useEffect, useState, createContext } from "react";
import PostService from '../Services/PostService'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Create from "../Pages/Create";
import Login from "../Pages/Login";
import List from "../Pages/List";
import Protect from "../Pages/Protect";
import routes1 from "./Route";
import Public from "../Pages/Public";


const Routes_index = () => {
  const [access_perm, setAccess_perm] = useState([])
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("user")) {
      PostService.role_show_edit(id.role_id)
        .then((res) => {
          setAccess_perm(res.permission.map((Elem) => {
            return Elem.name
          }))
        })
    }
  }, [flag])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<List />} >
          {routes1.map((elem, inx) => {

            return (
              <Route key={inx} exact={true} path={elem.path} element={<Protect Component={elem.component} permission={elem.permission} rolepermission={access_perm} />} />
            );
          })}
    
        </Route>
        <Route exact path="/" element={<Public> <Login setFlag={setFlag} /> </Public>} />
        <Route exact path="/create" element={<Public> <Create /> </Public>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routes_index;
