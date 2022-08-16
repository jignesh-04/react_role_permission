import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import PostService from '../../Services/PostService';
import Swal from 'sweetalert2';
import { permisionAccess } from '../List'



const UserDashbord = () => {
  //Access role
    const AccessPermissionData = useContext(permisionAccess);

    const navigate = useNavigate()
    const [userGetData, setUserGetData] = useState([]);
    // get API data
    useEffect(() => {
        PostService.user_get_API()
            .then((ere) => {
                // console.log("user_get_API",ere.data)
                setUserGetData(ere.data)
            })
    }, [])

    //delete user Api ListData
    const userListData_Delete = (id, inx) => {
        PostService.user_delete(id)
            .then((ers) => {
                setUserGetData((prev) => {
                    // console.log("preveas value",prev)
                    prev.splice(inx, 1)
                    return ers
                })
            })
    }
    //sweetalert mate 
    const userDelete = (id, inx) => {
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
                userListData_Delete(id, inx)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // update APIdata mate
    const userEdit = (id, Elem) => {
        navigate("/UserForm/" + id)
    }

    return (
        <>
            <div className="student_nav" >
                <div>
                    <h3>Users</h3>
                </div>
                <div>
                    {
                        (AccessPermissionData.includes("add user"))&& <button onClick={() => { navigate("/UserForm") }} type="button" className="btn btn-block btn-success">Add User</button>
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
                                <th>Role</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userGetData.map((Elem, inx) => {
                                    // console.log("Elem data==>", Elem)
                                    return (
                                        <tr key={inx}>
                                            <td>{inx + 1}</td>
                                            <td>{Elem.id}</td>
                                            <td>{Elem.role.name}</td>
                                            <td>{Elem.name}</td>
                                            <td>{Elem.email}</td>
                                            <td>
                                                {(AccessPermissionData.includes("edit user")) &&
                                                    <button onClick={() => { userEdit(Elem.id, Elem) }} type="button" className="btn btn-sm  btn-info mr-2">Edit</button>
                                                }
                                                {(AccessPermissionData.includes("delete user")) &&
                                                    <button onClick={() => { userDelete(Elem.id, inx) }} type="button" className="btn btn-sm  btn-danger">Delete</button>
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

export default UserDashbord;