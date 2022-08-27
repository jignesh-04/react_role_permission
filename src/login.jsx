import React from "react";
import "./Css/Login.css";
import InputField from "./Common/FormElement/InputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "./Common/FormElement/InputField";
import Postservice from "./Service/Postservice";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("hare hare =>", data);
    Postservice.logIn_API(data).then((res) => {
      console.log("11111=>", res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.token);
      navigate("/student");
    });
  };

  // Checkbox
  const login_checkbox_options = [
    {label: "Remember Me", value:"Remember Me"}
  ]

  return (
    <>
      <div className="main_login">
        <div className="login_box">
          <h6>Sign in to start your session</h6>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputField
                placeholder="Email"
                name="email"
                validation={{ ...register(`email`) }}
              />
            </div>
            <div>
              <InputField
                placeholder="Password"
                name="password"
                validation={{ ...register(`password`) }}
              />
            </div>

            <div className="check_btn">
              <div>
                <Checkbox
                type="checkbox"
                options={login_checkbox_options}
                /> 
              </div>
              <button type="Submit" className="btn">
                Sign In
              </button>
            </div>
            <div className="register">
              <a href="#">Register a new Account</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
