import React, { useEffect, useState } from "react";
import Postservice from "../Service/Postservice";
import { Link, useNavigate } from "react-router-dom";

const DashbordList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    Postservice.get_call().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="dashbord_nav">
        <h6>Student Dashbord</h6>
        <div>
          <Link to="/StudentForm" className="btn">Student</Link>
          <Link to="/UserForm" className="btn">User</Link>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Marks</th>
            <th>Content</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Elem, inx) => {
            return (
              <tr key={inx}>
                <td>{Elem.id}</td>
                <td>{Elem.name}</td>
                <td>{Elem.father_name}</td>
                <td>{Elem.mark}</td>
                <td>{Elem.contact_no}</td>
                <td>{Elem.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashbordList;
