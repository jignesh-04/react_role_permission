import React, { useState } from "react";
import "../Css/StudentForm.css";
import { useForm } from "react-hook-form";
import InputField, {
  Checkbox,
  Radio,
  Dropdwon,
} from "../Common/FormElement/InputField";

const StudentForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("form-Data==>", data);
  };

  // dropwon
  const dropdwon_options = [
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat ", value: "Surat" },
    { label: "Bharuch ", value: "Bharuch" },
    { label: "Baroda ", value: "Baroda" },
  ];

  //Radio
  const radio_options = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
    { label: "Gujrati", value: "Gujrati" },
  ];

  //Checkbox
  const checkbox_options = [
    { label: "Reading", value: "Reading" },
    { label: "Music", value: "Music" },
    { label: "Sports", value: "Sports" },
  ];

  return (
    <>
      <div className="form_nav">
        <h5>Student Form :-</h5>
      </div>
      <div className="form_body">
        <div className="form_body_under">
          <form onSubmit={handleSubmit(onSubmit)} className="form_form">
            <InputField
              placeholder="name"
              type="text"
              validation={{ ...register(`name`, { required: true }) }}
            />
            {errors?.name?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}
            <InputField
              placeholder="Contect"
              type="tel"
              validation={{ ...register(`contact_no`, { required: true }) }}
            />
            {errors?.contact_no?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}

            <InputField
              placeholder="Email"
              type="email"
              validation={{ ...register(`email`, { required: true }) }}
            />
            {errors?.email?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}

            {/* Dropdown */}
            <Dropdwon
              className="dropdwon"
              options={dropdwon_options}
              validation={{ ...register("city", { required: true }) }}
            />
            {errors?.city?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}
            {/* radio */}
            <Radio
              options={radio_options}
              type="radio"
              title="Language :"
              validation={{ ...register("language", { required: true }) }}
            />
            {errors?.language?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}
            {/* checkbox */}
            <Checkbox
              options={checkbox_options}
              type="checkbox"
              title="Hobbies :"
              validation={{ ...register("hobbies", { required: true }) }}
            />
            {errors?.hobbies?.type === "required" && (
              <p className="text-danger mt-0 mb-0">@This field is required</p>
            )}
            <button type="Submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
