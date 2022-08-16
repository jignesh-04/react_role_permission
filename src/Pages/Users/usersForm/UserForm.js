import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PostService from '../../../Services/PostService'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useParams } from 'react-router-dom';


const UserForm = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [userData, setUserData] = useState([]);
    const [updateData, setUpdateData] = useState([]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm()

    //API data get     
    useEffect(() => {
        PostService.role_ger_API()
            .then((ere) => {
                // console.log("user_get_API",ere.data)
                setUserData(ere.data)
            })
    }, [])

    //show API send id
    useEffect(() => {
        PostService.user_show_edit(param.id)
            .then((res) => {
                setUpdateData(res)
            })
    }, [])

    //fill data on edit
    // console.log("updateData==>",updateData)

    useEffect(() => {
        if (updateData.role) {
            // console.log("fhjsdgfjhsdgfjsdfg==>",updateData)
            console.log("this is if====>",updateData.role.id);
            reset({
                role: updateData.role.id,
                name: updateData.name,
                email: updateData.email
            })
        }
    }, [userData,updateData])

    const onSubmit = (data) => {

        if (param.id) {
            //update
            PostService.user_update(param.id, data)
                .then((res) => {
                    toast.success(res)
                    navigate("/Users")
                })
                .catch((ere) => {
                    toast.error(ere.message)
                })

        } else {
            //create
            PostService.userRegister_API(data)
                .then((ere) => {
                    toast.success(ere)
                    navigate("/Users")
                })
                .catch((er) => {
                    toast.error(er.message)
                })
        }
    }

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title"> User Form</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select {...register("role", { required: true })} className="custom-select rounded-0" id="role" placeholder='Selact'>
                            {
                                userData.map((Elem, inx) => {
                                    // console.log("abcd==>", Elem.name)
                                    return (
                                        <option key={inx} value={Elem.id}>{Elem.name}</option>
                                    )
                                })
                            }
                        </select>
                        {errors?.role?.type === "required" && <p>@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input {...register("name", { required: true })} type="text" className="form-control" id="name" placeholder="Enter Name" />
                        {errors?.name?.type === "required" && <p>@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Email</label>
                        <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-control" placeholder="Email" />
                        {errors?.email?.type === "required" && <p>@This field is required</p>}
                        {errors?.email?.type === "pattern" && <p>@invalide email</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Password</label>
                        <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Password" />
                        {errors?.password?.type === "required" && <p>@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Confirm Password</label>
                        <input {...register("confirm_password", { required: true })} type="password" className="form-control" placeholder="Retype password" />
                        {errors?.confirm_password?.type === "required" && <p>@This field is required</p>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary mr-4">Submit</button>
                    <button onClick={() => { navigate("/Users") }} type="button" className="btn btn-danger">Cancle</button>
                </div>
            </form>
        </div>
    )
}
export default UserForm;

