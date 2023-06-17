import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function TextArea(props) {
    const {label,name,...rest}=props
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name}>{label}</label>
      <Field className="form-control" as='textarea' id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default TextArea
