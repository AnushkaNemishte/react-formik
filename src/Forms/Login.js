import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import FormikControls from '../Formik-Controls/FormikControls';
import { Button } from 'react-bootstrap';

function Login() {
    const initialValue = {
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    }
    const validationSchema = Yup.object({
        username:Yup.string().required("Username is Required"),
        email:Yup.string().email("Invalid password format").required("Email is Required"),
        password:Yup.string().min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
        confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    })

    const onSubmit = (value,onSubmitProps) => {
        console.log("form data", value)
        onSubmitProps.resetForm()
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formikprops) => {
                    return (
                        <Form>
                        <div className='container'>
                            <h1>Login Form</h1>
                            <FormikControls
                                control="input"
                                type="text"
                                label="UserName"
                                placeholder="Enter your username"
                                name="username"
                            />
                            <FormikControls
                                control="input"
                                type="email"
                                label="Email"
                                placeholder="Enter Your Email"
                                name="email"
                            />
                            <FormikControls
                                control="input"
                                type="password"
                                label="Password"
                                placeholder="Enter Password"
                                name="password"
                            />
                            <FormikControls
                                control="input"
                                type="password"
                                label="Confirm Password"
                                placeholder="Confirm Password"
                                name="confirmpassword"
                            />
                            <Button variant='primary'disabled={!formikprops.isValid} type='submit'>
                                Submit
                            </Button>
                            
                        </div>
                        </Form>
                    )
                }
            }

        </Formik>
    );
}

export default Login;
