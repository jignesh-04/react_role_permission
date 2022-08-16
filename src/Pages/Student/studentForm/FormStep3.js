import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { form_Data } from './StudentForm';
import PostService from '../../../Services/PostService'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import baseUrl from "../../../Config/baseUrl";


const FormStep3 = (props) => {
    let navigate = useNavigate();
    let param = useParams()

    const firstData = useContext(form_Data)
    const [step3, setStep3] = useState()
    const [images, setImg] = useState()
    const [fileData, setFileData] = useState()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm()

    const onImageChange = (e) => {
        // console.log(e.target.files)
        const [file] = e.target.files;
        setFileData(file);
        setImg(URL.createObjectURL(file));
    }

    const onSubmit = (data) => {
        props.formval(data)
        setStep3(data)

        let formData = new FormData();
        formData.append('name', props.FormData.name)
        formData.append('father_name', props.FormData.father_name)
        formData.append('mother_name', props.FormData.mother_name)
        formData.append('contact_no', props.FormData.contact_no)
        formData.append('address', props.FormData.address)
        formData.append('city', props.FormData.city)
        formData.append('state', props.FormData.state)
        formData.append('country', props.FormData.country)
        formData.append('school', data.school)
        formData.append('standard', data.standard)
        formData.append('mark', data.mark)
        formData.append('images', fileData)

        if (param.id) {
            //update
            let id = props.FormData.id
            setStep3(formData)
            PostService.student_update(id, formData)
                .then((ere) => {
                    toast.success(ere)
                    navigate("/student")
                })
                .catch((er) => {
                    toast.error(er.response.data.message[0])
                })
        } else {
            //create
            PostService.student_registor(formData)
                .then((ere) => {
                    toast.success(ere)
                    navigate("/student")
                })
                .catch((er) => {
                    toast.error(er.response.data.message[0])
                })
        }
    }

    // data set in form
    // console.log("image->", baseUrl + "/" + props.FormData.image)

    useEffect(() => {
        {
            reset({
                school: props.FormData.school,
                standard: props.FormData.standard,
                mark: props.FormData.mark,
                images: props.FormData.image,
            })
        }
    }, [props.FormData])

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Student Forms Step : 3</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="school">School Name</label>
                        <input {...register("school", { required: true })} type="text" className="form-control" id="school" placeholder="Enter School Name" />
                        {errors?.school?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="standard">Standard</label>
                        <input {...register("standard", { required: true })} type="number" className="form-control" id="standard" placeholder="Enter Standard" />
                        {errors?.standard?.type === "required" && <p className="text-danger">@This field is required</p>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="marks">Marks</label>
                        <input {...register("mark", { required: true })} type="number" className="form-control" id="marks" placeholder="Enter Marks" />
                        {errors?.mark?.type === "required" && <p className="text-danger">@This field is required</p>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputFile">File input</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input {...register("images", { required: true })} onChange={onImageChange} type="file" className="custom-file-input" id="exampleInputFile" />
                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text">Upload</span>
                            </div>
                        </div>
                        <img style={{ width: "100px" }} src={images ? images : baseUrl + "/" + props.FormData.image} />
                        {/* {images? <img style={{ width: "100px" }} src={images} />:<img style={{ width: "100px" }} src={baseUrl + "/" + props.FormData.image} /> } */}

                        {errors?.images?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                </div>
                <div className="card-footer">
                    <button onClick={props.previousStep} type="button" className="btn btn-primary mr-4">Pervious</button>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormStep3;