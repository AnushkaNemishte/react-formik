import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function Select(props) {
    const {label,name,options,...rest}=props
  return (
    <div className='form-group mb-3'>
      <label htmlFor={name}>{label}</label>
      <Field as="select" className="form-control" id={name} name={name} {...rest}>
        {
            options.map((option)=>{
                return (
                    <option key={option.value} value={option.value}>
                    {option.key}
                    </option>
                )
            })
        }
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select
