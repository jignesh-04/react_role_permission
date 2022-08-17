import React, { useState } from 'react'
import "./Form.css"
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"

const UpdateForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();
   
    const onSubmit = (data) => {
        // console.log(data)
    }

    var get_data = JSON.parse(localStorage.getItem("Employee"))

    const [update_data, setUpdate_data] = useState(get_data);

    console.log(update_data);


  return (
    <div className='form_body'>

        <h1> -: Update FORM :- </h1>
        <button onClick={()=>{navigate("/list")}}>List</button>

        <form onSubmit={handleSubmit(onSubmit)} >
            
            <input type='text' {...register("name")} placeholder='Name' className='full'/><br/>
                                 
            <input type='date' {...register("date")} placeholder='Date Of Birth' className='full'/><br/>
            
            <input type='tel' {...register("tel")} placeholder='Contact No.' className='full'/><br/>
    
            <input type='email' {...register("email")} placeholder='Email' className='full'/><br/>
            
            <div className='radio_btn'>
            <label className='lable_click'>Gender : </label><br/>
            <input type='radio' {...register("radio")} value='Female' checked />
            <label for='Female'>Female</label>
            <input type='radio' {...register("radio")} value='Male' />
            <label for='Male'>Male</label><br/>
            </div>
            
            <div>
            <label className='lable_click'>Catagary : </label><br/>
            <input type='checkbox' {...register("checkbox")} value='Inquiry' />
            <label for='Inquiry'>Inquiry</label>
            <input type='checkbox' {...register("checkbox")} value='Complain' />
            <label for='Complain'>Complain</label>
            <input type='checkbox' {...register("checkbox")} value='Payment' />
            <label for='Payment'>Payment</label>
            </div><br/>
  
            <div className='form_btn'>
            <button type="reset">Reset</button> 
            <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateForm;