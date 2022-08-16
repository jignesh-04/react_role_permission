import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PostService from '../Services/PostService'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Login = ({setFlag, ...props}) => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, } = useForm();

  const onSubmit = (data) => {

    PostService.logIn_API(data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user))
        localStorage.setItem("token", res.token)  
        setFlag(p => !p) 
        navigate("/student")
      })
      .catch((err) => {
        // console.log("reject",err.response)
        // console.log("=======>",err.response.data.message[0]) 
        toast.error(err.response.data.message[0])
      })
  }

  return (
    <React.Fragment>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="#"><b>Admin</b>LTE</a>
          </div>
          <ToastContainer />
          {/* <!-- /.login-logo --> */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="text" className="form-control" placeholder="Email" />
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
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block" >LogIn</button>
                  </div>
                  <p className="ml-2">
                    <a onClick={() => { navigate('/create') }}>Create account</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Login