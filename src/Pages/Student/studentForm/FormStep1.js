import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { form_Data } from './StudentForm';


const FormStep1 = (props) => {
    // console.log("props 1- data", props.FormData)

    let navigate = useNavigate()

    const firstData = useContext(form_Data)

    const [step1, setStep1] = useState([props.FormData]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        props.formval(data)
        setStep1(data)
        props.nextStep()
    }
    
    // data set in form
    useEffect (() => {
        { 
                // console.log("name", props.FormData)
                reset({
                    name: props.FormData.name,
                    father_name: props.FormData.father_name,
                    mother_name: props.FormData.mother_name,
                    contact_no: props.FormData.contact_no, 
                })
        }
    },[props.FormData])

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Student Forms Step : 1</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input {...register("name", { required: true })} type="text" className="form-control" id="name" placeholder="Enter Name" />
                        {errors?.name?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="fname">Father Name</label>
                        <input {...register("father_name", { required: true })} type="text" className="form-control" id="fname" placeholder="Enter FatherName" />
                        {errors?.father_name?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="mname">Mother Name</label>
                        <input {...register("mother_name", { required: true })} type="text" className="form-control" id="mname" placeholder="Enter MotherName" />
                        {errors?.mother_name?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Content Number</label>
                        <input  {...register("contact_no", { required: true })} type="number" className="form-control" id="number" placeholder="Enter Content Number" />
                        {errors?.contact_no?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </form>

        </div>
    )
}

export default FormStep1;

