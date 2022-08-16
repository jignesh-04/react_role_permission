import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { form_Data } from './StudentForm';
import PostService from '../../../Services/PostService';
import { useParams } from 'react-router-dom';


const FormStep2 = (props) => {
    // console.log("props data form2 =>", props.FormData)

    let param = useParams()

    let navigate = useNavigate();

    const firstData = useContext(form_Data)

    const [step2, setStep2] = useState([props.FormData])
    const [token, setToken] = useState({})
    const [countryData, setCountryData] = useState([])
    const [stateData, setStateData] = useState([])
    const [cityData, setCityData] = useState([])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        props.formval(data)
        setStep2(data)
        props.nextStep();

    }

    useEffect(() => {
        // country API free use
        let obj = {
            "Accept": "application/json",
            "api-token": "5iHNAxWC_4dJQxsSwcAxj7nCziMzPmZJIoD-jyOLSADj_FYwUS9911Bo0jD6srFFNeY",
            "user-email": "jignesh.panthercodx@gmail.com"
        }

        PostService.getaccesstoken({ headers: obj })
            .then((ere) => {
                let response_token = {
                    "Authorization": "Bearer " + ere.data.auth_token,
                    "Accept": "application/json"
                }
                setToken(response_token);

                PostService.countries_API({ headers: response_token })
                    .then((ere) => {
                        // console.log("ere", ere.data)
                        setCountryData(ere.data)
                    })


            })
    }, [])

    // state API
    const selectCountry = (e, tok) => {
        let id = e.target.value;
        //state API
        PostService.states_API(id, { headers: tok })
            .then((ere) => {
                // console.log("ere",ere.data)
                setStateData(ere.data)
            })
    }

    // city API
    const selectState = (s, tok) => {
        let id = s.target.value

        PostService.city_API(id, { headers: tok })
            .then((ere) => {
                setCityData(ere.data)
            })
    }

    // data set in form
    useEffect(() => {

        reset({
            country: props.FormData.country,
            state: props.FormData.state,
            city: props.FormData.city,
            address: props.FormData.address,
        })

        if (param.id && props.FormData.country && stateData.length == 0) {
            selectCountry({ target: { value: props.FormData.country } }, token);
        }
        if (param.id && props.FormData.state && cityData.length == 0) {
            selectState({ target: { value: props.FormData.state } }, token);
        }

    }, [props.FormData])

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">Student Forms Step : 2</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select {...register("country", { required: true })} onChange={(e) => { selectCountry(e, token) }} className="custom-select rounded-0" id="country" placeholder='Selact'>
                            {
                                countryData.map((Elem, inx) => {
                                    return (
                                        <option key={inx}>{Elem.country_name}</option>
                                    )
                                })
                            }
                        </select>
                        {errors?.country?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select {...register("state", { required: true })} onChange={(s) => { selectState(s, token) }} className="custom-select rounded-0" id="state" placeholder='Selact'>
                            {
                                stateData.map((Elem, inx) => {
                                    return (
                                        <option key={inx}>{Elem.state_name}</option>
                                    )
                                })
                            }
                        </select>
                        {errors?.state?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select {...register("city", { required: true })} className="custom-select rounded-0" id="city" placeholder='Selact'>
                            {
                                cityData.map((Elem, inx) => {
                                    return (
                                        <option key={inx}>{Elem.city_name}</option>
                                    )
                                })
                            }
                        </select>
                        {errors?.city?.type === "required" && <p className="text-danger">@This field is required</p>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input {...register("address", { required: true })} type="tel" className="form-control" id="address" placeholder="Enter Address" />
                        {errors?.address?.type === "required" && <p className="text-danger">@This field is required</p>}
                    </div>

                </div>
                <div className="card-footer">
                    <button onClick={props.previousStep} type="button" className="btn btn-primary mr-4">Pervious</button>
                    <button type="submit" className="btn btn-primary">Next</button>
                </div>
            </form>
        </div>
    )
}

export default FormStep2;