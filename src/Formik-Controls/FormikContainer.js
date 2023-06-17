import { Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControls from "./FormikControls";
function FormikContainer() {
    const dropdownOptions = [
        {key:"Select an Option ",value:""},
        {key:"Option 1 ",value:"opt 1"},
        {key:"Option 2 ",value:"opt 2"},
        {key:"Option 3 ",value:"opt 3"},
    ]
  const initialValue = {
    name: "",
    email: "",
    description:"",
    selectOption:""
  };
  const onSubmit = (values) => {
    console.log("Form data ", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
    description:Yup.string().required("Required"),
    selectOption:Yup.string().required("Required"),
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
              <FormikControls
                control="textarea"
                name="description"
                label="Description"
              />
              <FormikControls
                control="select"
                label="Select anything"
                name="selectOption"
                options={dropdownOptions}
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
