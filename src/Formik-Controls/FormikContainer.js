import { Form, Formik } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import FormikControls from "./FormikControls";
function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an Option ", value: "" },
    { key: "Option 1 ", value: "opt 1" },
    { key: "Option 2 ", value: "opt 2" },
    { key: "Option 3 ", value: "opt 3" },
  ]
  const radioOptions = [
    { key: "Option 1 ", value: "radioopt 1" },
    { key: "Option 2 ", value: "radioopt 2" },
    { key: "Option 3 ", value: "radioopt 3" },
  ]
  const checkboxOptions = [
    { key: "Option 1 ", value: "checkboxopt 1" },
    { key: "Option 2 ", value: "checkboxopt 2" },
    { key: "Option 3 ", value: "checkboxopt 3" },
  ]

  const initialValue = {
    name: "",
    email: "",
    description: "",
    selectOption: "",
    radioButton:"",
    checkBox:[],
    birthDate:null,
    };
  const onSubmit = (values) => {
    console.log("Form data ", values);
    
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioButton:Yup.string().required("Required"),
    checkBox:Yup.array().required("Required"),
    birthDate:Yup.string().required("Required").nullable()
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
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
                placeholder="Enter your Name"
              />
              <FormikControls
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your Email"
              />
              <FormikControls
                control="textarea"
                name="description"
                label="Description"
                placeholder="Enter Description"
              />
              <FormikControls
                control="select"
                label="Select anything"
                name="selectOption"
                options={dropdownOptions}
              />
              <FormikControls
              control="radio"
              label="Radio Button"
              name="radioButton"
              options={radioOptions}
              />
              <FormikControls
                control="checkbox"
                label="Select Check-Box"
                name="checkBox"
                options={checkboxOptions}
              />
              <FormikControls
                control="date"
                label="Date Of Birth"
                name="birthDate"
              />
              <Button variant="primary" type="submit" >
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
