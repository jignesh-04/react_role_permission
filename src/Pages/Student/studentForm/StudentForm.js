import React, { useEffect, useState, createContext } from 'react'
import StepWizard from 'react-step-wizard'
import PostService from '../../../Services/PostService'
import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'
import FormStep3 from './FormStep3'
import { useParams } from 'react-router-dom'

const form_Data = createContext();

const StudentForm = (props) => {

  let param = useParams()

  const [state, setState] = useState({});
  
  // console.log("stuForm state -->", state)

  const studentFormData = (data) => {
    
    setState({ ...state, ...data })
  }

  useEffect(() => {
    // console.log("param-id===>", param.id)
    PostService.student_get_update(param.id)
      .then((ere) => {
        setState(ere)
      })
  }, [])

  return (
    <div>
      <form_Data.Provider value={""}>
        <StepWizard>
          <FormStep1 formval={studentFormData} FormData={state} />
          <FormStep2 formval={studentFormData} FormData={state}/>
          <FormStep3 formval={studentFormData} FormData={state} />
        </StepWizard>
      </form_Data.Provider>

    </div>
  )
}

export default StudentForm;
export { form_Data }