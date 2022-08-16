import React, { useEffect, useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import PostService from '../../Services/PostService';
import Swal from 'sweetalert2';
import {permisionAccess} from '../List'


const PermisionDashbord = () => {
  //Access role
  const AccessPermissionData = useContext(permisionAccess);
  
  const navigate = useNavigate();
  const [permisionData, setPermisionData] = useState([]);
  
  // get permision Data
  useEffect(() => {
    PostService.permision_get_API()
      .then((res) => {
        setPermisionData(res.data)
      })

  }, [])

  //permision delete
  const permision_list_delete = (id, inx) => {
    PostService.permision_delete_API(id)
      .then((res) => {
        setPermisionData((prev) => {
          // console.log("prev data======>", prev)
          prev.splice(inx, 1)
          return res.data
        })
      })
  }
  //sweetalert use
  const permision_delete = (id, inx) => {
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
        permision_list_delete(id, inx)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  //permision edit
  const permision_edit = (id) => {
    navigate("/permisionForm/" + id)
  }

  return (
    <>
      <div className="student_nav" >
        <div>
          <h3>Permisions</h3>
        </div>
        <div>
          {
          (AccessPermissionData.includes("add permission"))&&<button onClick={() => { navigate("/permisionForm") }} type="button" className="btn btn-block btn-success">Add Permision</button>
          }
        </div>
      </div>
      <div className="card m-4 border">
        {/* <!-- /.card-header --> */}
        <div className="card-body p-0">
          <table className="table table-striped">
            <thead>
              <tr>

                <th>id</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                permisionData.map((Elem, inx) => {
                  // console.log("Elem data==>", Elem)
                  return (
                    <tr key={inx}>

                      <td>{Elem.id}</td>
                      <td>{Elem.name}</td>
                      <td>
                      {(AccessPermissionData.includes("edit permission"))&&
                        <button  onClick={() => { permision_edit(Elem.id) }} type="button" className="btn btn-sm  btn-info mr-2">Edit</button>
                      }
                      {(AccessPermissionData.includes("delte permission"))&&
                      <button  onClick={() => { permision_delete(Elem.id, inx) }} type="button" className="btn btn-sm  btn-danger">Delete</button>
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
export default PermisionDashbord