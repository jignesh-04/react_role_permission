import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PostService from "../../../Services/PostService";
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const RoleForm = () => {
    const navigate = useNavigate()
    const param = useParams()

    const [permisionData, setPermisionData] = useState([]);
    const [updateData, setUpdateData] = useState([]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    //get permision data
    useEffect(() => {
        PostService.permision_get_API()
            .then((res) => {
                setPermisionData(res.data);
            });
    }, []);

    //show API send Id
    // useEffect(() => {
    //     PostService.role_show_edit(param.id)
    //         .then((res) => {
    //             // console.log("dataforres==>",res)
    //             setUpdateData(res)
    //         })
    // }, [])

    //fill data on edit
    useEffect(() => {
        reset({
            name: updateData.name,
            permission: updateData.permission?.map((Elem) => {
                return `${Elem.id}`
            })
        })
    }, [updateData])

    const onSubmit = (data) => {
        if (param.id) {
            //update
            PostService.role_update(param.id, data)
                .then((res) => {
                    toast.success(res)
                    navigate("/Role")
                })
                .catch((ere) => {
                    console.log("masage===>", ere)
                    toast.error(ere.message)

                })
        } else {
            //Create
            PostService.role_register_API(data)
                .then((res) => {
                    toast.success(res.data)
                    navigate("/Role")
                })
                .catch((ere) => {
                    toast.error(ere.message)
                })
        }
    };



    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Role Form</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputname">Role Name</label>
                        <input {...register("name", { required: true })} type="name" className="form-control" id="exampleInputname" placeholder="Enter Rale Name" />
                        {errors?.name?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>

                    <label htmlFor="exampleInputname"> Permisions :-</label><br />

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id='all_select' />
                        <label className="form-check-label" htmlFor='all_select'>All Select</label>

                        <div className="form-check permis">
                            {permisionData.map((Elem, inx) => {
                                return (
                                    <div key={inx} className='innerWidth'>
                                        <input {...register("permission", { required: true })} type="checkbox" className="form-check-input" id={inx} value={Elem.id} />
                                        <label className="form-check-label" htmlFor={inx}>{Elem.name}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {errors?.permission?.type === "required" && <p className="text-danger">@This field is required</p>}

                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary mr-4">Submit</button>
                    <button onClick={() => { navigate("/Role") }} type="button" className="btn btn-danger">Cancle</button>
                </div>
            </form>
        </div>
    );
};
export default RoleForm;
