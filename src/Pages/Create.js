import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PostService from '../Services/PostService'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const Create = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    // console.log("register------->", data)
    PostService.register_API(data)
      .then((ere) => {
        console.log("resolve", ere.data)
        navigate("/")
      })
      .catch((err) => {
        // console.log("reject",err.response.data.error.email)
        toast.error(err.response.data.error.email[0])
      })
  }

  return (
    <>
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <a onClick={() => { navigate("/") }}><b>Admin</b>LTE</a>
          </div>
          <ToastContainer />
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input {...register("name", { required: true })} type="text" className="form-control" placeholder="Full name" />
                  {errors?.name?.type === "required" && <p className="text-danger">@This field is required</p>}
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-control" placeholder="Email" />
                  {errors?.email?.type === "required" && <p className="text-danger">@This field is required</p>}
                  {errors?.email?.type === "pattern" && <p className="text-danger">@invalide email</p>}
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input {...register("password", { required: true })} type="password" className="form-control" placeholder="Password" />
                  {errors?.password?.type === "required" && <p className="text-danger">@This field is required</p>}
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input {...register("confirm_password", { required: true })} type="password" className="form-control" placeholder="Retype password" />
                  {errors?.confirm_password?.type === "required" && <p className="text-danger">@This field is required</p>}
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                  </div>
                </div>
              </form>
              <a onClick={() => { navigate("/") }} className="text-center">I already have a Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create