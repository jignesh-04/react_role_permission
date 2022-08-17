import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Form = () => {
    const navigate = useNavigate();
    const param = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, } = useForm();

    var employee = [];

    var data = JSON.parse(localStorage.getItem("Employee")); 

    const [update_data, setUpdate_data] = useState(data);

    const onSubmit = (data) => {
        if (param.id) {
            // update data on localstorage
            let updata = JSON.parse(localStorage.getItem("Employee"));

            let index = updata.findIndex((obj) => {
                return obj.id == param.id;
            });
            
            data["id"] = updata[index].id;
            
            updata[index] = data;
            
            localStorage.setItem("Employee", JSON.stringify(updata));

            { navigate("/list"); }

        } else {
            // create data on localstorage
            data.id = Math.floor(Date.now() / 100);

            if (localStorage.getItem("Employee")) {
                employee = JSON.parse(localStorage.getItem("Employee"));
            }
            employee.push(data);

            localStorage.setItem("Employee", JSON.stringify(employee));
            window.location.reload();
        }
    };

    useEffect(() => {
        // data set onclick update button on form
        {
            update_data?.map((ele, ex) => {
                
                if (ele.id == param.id) {
                    reset({
                        name: ele.name,
                        date: ele.date,
                        tel: ele.tel,
                        email: ele.email,
                        radio: ele.radio,
                        checkbox: ele.checkbox,
                    });
                }
            });
        }
    }, []);

    return (
        <div className="form_body">
            <h1> -: FORM :- </h1>
            <button
                onClick={() => {
                    navigate("/list");
                }}
            >
                List
            </button>
                
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="full"
                />
                {errors?.name?.type === "required" && <p>@This field is required</p>}
                <br />

                <input
                    type="date"
                    {...register("date", { required: true })}
                    placeholder="Date Of Birth"
                    className="full"
                />
                {errors?.date?.type === "required" && <p>@This field is required</p>}
                <br />

                <input
                    type="tel"
                    {...register("tel", { required: true })}
                    placeholder="Contact No."
                    className="full"
                />
                {errors?.tel?.type === "required" && <p>@This field is required</p>}
                <br />

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="full"
                />
                {errors?.email?.type === "required" && <p>@This field is required</p>}
                <br />

                <div className="radio_btn">
                    <label className="lable_click">Gender : </label>
                    <br />
                    <input type="radio" {...register("radio")} value="Female" checked />
                    <label for="Female">Female</label>
                    <input type="radio" {...register("radio")} value="Male" />
                    <label for="Male">Male</label>
                    <br />
                </div>

                <div className="checkbox_btn">
                    <label className="lable_click">Catagary : </label>
                    <br />
                    <input
                        type="checkbox"
                        {...register("checkbox", { required: true })}
                        value="Inquiry"
                    />
                    <label for="Inquiry">Inquiry</label>
                    <input
                        type="checkbox"
                        {...register("checkbox", { required: true })}
                        value="Complain"
                    />
                    <label for="Complain">Complain</label>
                    <input
                        type="checkbox"
                        {...register("checkbox", { required: true })}
                        value="Payment"
                    />
                    <label for="Payment">Payment</label>
                </div>
                {errors?.checkbox?.type === "required" && (
                    <p>@This field is required</p>
                )}
                <br />

                <div className="form_btn">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

