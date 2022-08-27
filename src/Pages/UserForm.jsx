import React from "react";
import "../Css/StudentForm.css";
import { useForm } from "react-hook-form";
import InputField, {
  Checkbox,
  Dropdwon,
  Radio,
} from "../Common/FormElement/InputField";
import { type } from "@testing-library/user-event/dist/type";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  //Dropdown
  const dropdown_options = [
    { label: "Ahmedabad", value: "Ahmedabad" },
    { label: "Surat", value: "Surat" },
    { label: "Baroda", value: "Baroda" },
    { label: "Bharuch", value: "Bharuch" },
    { label: "Mumbay", value: "Mumbay" },
    { label: "Delhi", value: "Delhi" },
  ];
  //Checkbox
  const checkbox_options = [
    { label: "Reading", value: "Reading" },
    { label: "Music", value: "Music" },
    { label: "Sports", value: "Sports" },
  ];
  //Radio
  const radio_options = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
    { label: "Gujrati", value: "Gujrati" },
  ];
  return (
    <>
      <div className="form_nav">
        <h5>User Form</h5>
      </div>
      <div className="form_body">
        <div className="form_body_under">
          <form onSubmit={handleSubmit(onSubmit)} className="form_form">
            <InputField
              placeholder="Name"
              type="text"
              validation={{ ...register("name", { required: true }) }}
            />
            {errors?.name?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <InputField
              placeholder="Email"
              type="email"
              validation={{ ...register("email", { required: true }) }}
            />
            {errors?.email?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <InputField
              placeholder="Password"
              type="password"
              validation={{ ...register("password", { required: true }) }}
            />
            {errors?.password?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <InputField
              placeholder="Mobile Number"
              type="tel"
              validation={{ ...register("mobile", { required: true }) }}
            />
            {errors?.mobile?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <InputField
              placeholder="Date of Birth"
              type="date"
              validation={{ ...register("date", { required: true }) }}
            />
            {errors?.date?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <Dropdwon
              className="dropdwon"
              options={dropdown_options}
              validation={{ ...register("city", { required: true }) }}
            />
            {errors?.city?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <Checkbox
              options={checkbox_options}
              type="checkbox"
              title="Hobbies :"
              validation={{ ...register("hobbies", { required: true }) }}
            />
            {errors?.hobbies?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <Radio
              options={radio_options}
              type="radio"
              title="Language :"
              validation={{ ...register("language", { required: true }) }}
            />
            {errors?.language?.type === "required" && (
              <p className="text-danger">@This field is required</p>
            )}

            <div className="btn_body">
              <button type="Submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
