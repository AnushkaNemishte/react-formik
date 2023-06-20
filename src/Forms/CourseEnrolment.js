import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import FormikControls from '../Formik-Controls/FormikControls';
import { Button } from 'react-bootstrap';
function CourseEnrolment() {
    const initialValue={
        email:"",
        bio:"",
        course:"",
        skillset:"",
        course_date:null,
    }
    const validationSchema= Yup.object({
        email:Yup.string().email("Invalid Email Format").required("Email is required"),
        bio:Yup.string().required("Bio is required"),
        course:Yup.array().required("Required"),
        skillset:Yup.string().required("Required"),
        course_date:Yup.date().required("Required").nullable(),
    })
    const onSubmit = (values)=>{
        console.log("Form data",values)
    }
    const courses =[
        {key:"HTML",value:"html"},
        {key:"CSS",value:"css"},
        {key:"JAVASCRIPT",value:"javascript"},
    ]
    const skillsets =[
        {key:"select Your Course",value:" "},
        {key:"ReactJS",value:"reactjs"},
        {key:"NodeJs",value:"nodejs"},
        {key:"Python",value:"python"},

    ]
  return (
   <Formik
    initialValues={initialValue}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    {
        (formikprops)=>{
            console.log("formikprops",formikprops)
            return(
                <div className='container'>
                    <h1>Course Enrollment Form</h1>
                    <Form>
                        <FormikControls
                            control="input"
                            type="email"
                            name="email"
                            placeholder="Enter EmailId"
                            label="Email"
                        />
                        <FormikControls
                            control="textarea"
                            name="bio"
                            label="Bio"
                            placeholder="Enter Something..."
                        />
                        <FormikControls
                            control="checkbox"
                            name="course"
                            label="Courses"
                            options={courses}
                        />
                        <FormikControls
                            control="select"
                            name="skillset"
                            label="Skill Set"
                            options={skillsets}
                        />
                        <FormikControls
                            control="date"
                            name="course_date"
                            label="Date"
                        />
                        <Button variant='primary' type='submit'>Submit</Button>
                    </Form>
                </div>
            )
        }
    }
   </Formik>
  );
}

export default CourseEnrolment;
