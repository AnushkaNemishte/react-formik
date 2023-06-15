import { Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControls from "./FormikControls";
function FormikContainer() {
  const initialValue = {
    name: "",
    email: "",
  };
  const onSubmit = (values) => {
    console.log("Form data ", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikprops) => {
        return (
          <div className="container">
            <h1>Form Controls</h1>
            <Form>
              <FormikControls
                control="input"
                type="text"
                label="Name"
                name="name"
              />
               <FormikControls
                control="input"
                type="email"
                label="Email"
                name="email"
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

export default FormikContainer;
