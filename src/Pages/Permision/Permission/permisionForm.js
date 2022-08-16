import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import PostService from "../../../Services/PostService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'

const PermisionForm = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [updateData, setUpdateData] = useState([]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm()

    //permision show  send id
    useEffect(() => {
        PostService.permision_show_edit(param.id)
            .then((res) => {
                // console.log("tintin==>",res.data)
                setUpdateData(res.data)
            })
    }, [])

    //fill data on edit
    useEffect(() => {
        reset({
            name: updateData.name
        })
    }, [updateData])

    const onSubmit = (data) => {
        if (param.id) {
            //update
            PostService.permision_update_API(param.id, data)
                .then((res) => {
                    toast.success(res.data)
                    navigate("/Permision")
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        } else {
            //Create
            PostService.permision_register_API(data)
                .then((res) => {
                    // console.log("data of res==>", res)
                    toast.success(res.data)
                    navigate("/Permision")
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    }

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Role Form</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputname">Permision Name</label>
                        <input {...register("name", { required: true })} type="name" className="form-control" id="exampleInputname" placeholder="Enter Rale Name" />
                        {errors?.name?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary mr-4">Submit</button>
                    <button onClick={() => { navigate("/Permision") }} type="button" className="btn btn-danger">Cancle</button>
                </div>
            </form>
        </div>
    )
}

export default PermisionForm;