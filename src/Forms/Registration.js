import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import FormikControls from '../Formik-Controls/FormikControls';
function Registration() {
    const options = [
        { key: "Email", value: "emailmoc" },
        { key: "Telephone", value: "telephonemoc" },
    ];
    const initialValue = {
        email: "",
        password: "",
        confirmpassword: "",
        modeofcontact: "",
        phone: ""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email id is required"),
        password: Yup.string().required("Password is required"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required("Confirm password is required"),
        modeofcontact: Yup.string().required("Mode of Contact is required"),
        phone: Yup.string().when('modeofcontact', {
            is: "telephonemoc",
            then: () => Yup.string().required("Required")
            .matches(/^[0-9]+$/, "Phone number must contain only digits")
            .matches(/^\d{10}$/, "Phone number must be a 10-digit number")
           
        }),
    })
    const onSubmit = (values) => {
        console.log("Form data", values)
    }
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formikprops) => {
                    console.log("FormikProps", formikprops)
                    return (
                        <div className='container'>
                            <h1 >Registration Form</h1>
                            <Form>
                                <FormikControls
                                    control="input"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    placeholder="Enter Your Email-Id"
                                />
                                <FormikControls
                                    control="input"
                                    name="password"
                                    label="Create New Password"
                                    type="password"
                                    placeholder='Enter Your Password'
                                />
                                <FormikControls
                                    control="input"
                                    name="confirmpassword"
                                    label="Confirm Your Password"
                                    type="password"
                                    placeholder="Confirm Your Password"
                                />
                                <FormikControls
                                    control="radio"
                                    name="modeofcontact"
                                    label="Mode of contact"
                                    options={options}
                                />
                                <FormikControls
                                    control="input"
                                    name="phone"
                                    label="Phone"
                                    type="text"
                                    placeholder="Enter Phone Number"
                                />
                                <Button variant='primary' type="submit"
                                >Submit</Button>
                            </Form>
                        </div>
                    )
                }
            }
        </Formik>
    );
}

export default Registration;
