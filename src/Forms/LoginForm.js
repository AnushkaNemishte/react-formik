import { Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControls from "../Formik-Controls/FormikControls";

function LoginForm() {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const OnSubmit = (values,onSubmitProps) => {
    console.log("form data", values);
    onSubmitProps.resetForm()
  };
  const validationSchema = Yup.object({
    username:Yup.string().required("UserName is Required"),
    email:Yup.string().email("Invalid Format").required("Required"),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
    confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={OnSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <div className="container">
            <h1>Login Form</h1>

            <Form>
              <FormikControls
                control="input"
                type="text"
                label="UserName"
                name="username"
              />
              <FormikControls
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControls
                control="input"
                type="password"
                label="Password"
                name="password"
              />
               <FormikControls
                control="input"
                type="password"
                label="ConfirmPassword"
                name="confirmpassword"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
