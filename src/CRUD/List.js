import React, { useState } from 'react'
import "./List.css"
import { useNavigate } from 'react-router-dom';

const List = () => {

    var perData = JSON.parse(localStorage.getItem("Employee"));
   
    const [data, setData] = useState(perData);

    const navigate = useNavigate();

    const delete_data = (id) =>{
        let employee_data = JSON.parse(localStorage.getItem("Employee"));
        for(let i=0; i < employee_data.length; i++){
            if(employee_data[i].id == id){
                employee_data.splice(i,1)
            }
        } 
        localStorage.setItem("Employee", JSON.stringify(employee_data));
        window.location.reload()
    }

    return (
        <div>
            <h1>Data List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Catagary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, indx ) => {
                            return (
                                <tr key={indx}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.date}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.radio}</td>
                                    <td>{ele.checkbox}</td>
                                    <td>
                                        <button onClick={()=>{navigate("/form/" + ele.id)}}>Update</button>
                                        <button onClick={()=>{delete_data(ele.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;