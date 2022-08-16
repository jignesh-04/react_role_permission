import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../Services/PostService';
import Swal from 'sweetalert2';
import { permisionAccess } from '../List'

const UserDashbord = () => {
  //Access role
  const AccessPermissionData = useContext(permisionAccess)

  const navigate = useNavigate();
  const [roleData, setRoleData] = useState([])

  useEffect(() => {
    PostService.role_ger_API()
      .then((ers) => {
        setRoleData(ers.data)
      })
  }, [])

  //role delete
  const delete_role = (id, inx) => {
    PostService.role_delete_API(id)
      .then((res) => {
        setRoleData((prev) => {
          prev.splice(inx, 1)
          return res.data
        })
      })
  };
  //delete sweetalert
  const role_list_delete = (id, inx) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // delete function call
        delete_role(id, inx)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  // role Edit
  const role_list_edit = (id, inx) => {
    navigate("/RoleForm/" + id)
  }
  return (
    <>
      <div className="student_nav" >
        <div>
          <h3>Roles</h3>
        </div>
        <div>
          {
            (AccessPermissionData.includes("add role")) && <button onClick={() => { navigate("/RoleForm") }} type="button" className="btn btn-block btn-success">Add Role</button>
          }
        </div>
      </div>
      <div className="card m-4 border">
        {/* <!-- /.card-header --> */}
        <div className="card-body p-0">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No.</th>
                <th>id</th>
                <th>Name</th>
                <th>Permission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                roleData.map((Elem, inx) => {
                  // console.log("Elem data==>", Elem)
                  return (
                    <tr key={inx} >
                      <td>{inx + 1}</td>
                      <td>{Elem.id}</td>
                      <td>{Elem.name}</td>
                      <td >
                        <div className='permis'>
                          {Elem.permission.map((elem, inx) => {
                            return (
                              <li key={inx}>{elem.name}</li>
                            )
                          })}
                        </div>
                      </td>
                      <td>
                        {(AccessPermissionData.includes("edit role")) &&
                          <button onClick={() => { role_list_edit(Elem.id, inx) }} type="button" className="btn btn-sm  btn-info mr-2">Edit</button>
                        }
                        {(AccessPermissionData.includes("delete role")) &&
                          <button onClick={() => { role_list_delete(Elem.id, inx) }} type="button" className="btn btn-sm  btn-danger">Delete</button>
                        }
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default UserDashbord