import React, { useEffect, useState, useContext } from 'react'
import PostService from '../../Services/PostService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { permisionAccess } from '../List'


const Dashbord = () => {
  //Access role
    const AccessPermissionData = useContext(permisionAccess);

    let navigate = useNavigate();
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        PostService.get_call()
            .then((res) => {
                setGetData(res)
            })
    }, [])

    // delete API data
    const studentListData_Delete = (id, inx) => {
        PostService.student_delete(id)
            .then((ere) => {
                setGetData((prev) => {
                    prev.splice(inx, 1);
                    return ere;
                })
            })
    }
    //sweetalert mate
    const student_delete = (id, inx) => {
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
                studentListData_Delete(id, inx)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // update Api data
    const student_update = (id, Elem) => {
        navigate("/StudentForm/" + id)
    }

    return (
        <>
            <div className="student_nav" >
                <div>
                    <h3>Student</h3>
                </div>
                <div>
                    {
                        (AccessPermissionData.includes("add student")) &&<button onClick={() => { navigate("/StudentForm") }} type="button" className="btn btn-block btn-success">Add Student</button>
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
                                <th>Father Name</th>
                                <th>Marks</th>
                                <th>Content</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getData.map((Elem, inx) => {
                                    return (
                                        <tr key={inx}>
                                            <td>{Elem.id}</td>
                                            <td>{Elem.name}</td>
                                            <td>{Elem.father_name}</td>
                                            <td>{Elem.mark}</td>
                                            <td>{Elem.contact_no}</td>
                                            <td>{Elem.address}</td>
                                            <td>
                                                {(AccessPermissionData.includes("edit student")) &&
                                                    <button onClick={() => { student_update(Elem.id, Elem) }} type="button" className="btn btn-sm  btn-info mr-2">Edit</button>
                                                }
                                                {(AccessPermissionData.includes("delete student")) &&
                                                    <button onClick={() => { student_delete(Elem.id, inx) }} type="button" className="btn btn-sm  btn-danger">Delete</button>
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
export default Dashbord;