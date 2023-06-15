import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
function FormikContainer() {
    const initialValue={}
    const onSubmit = (values)=>{
        console.log("Form data ",values)
    }
    const validationSchema=Yup.object({

    })
  return (
    <Formik 
    initialValues={initialValue}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
    {
        (formikprops)=>{
            return(
            <div className='container'>
            <h1>Form Controls</h1>
            <Form>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
            </div>
            )
        }
    }
    </Formik>
  )
}

export default FormikContainer
