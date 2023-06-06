import React from 'react';
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import ValidationSchema from './ValidationSchema';



function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: ""
    },
    onSubmit: (values) => {
      console.log("Form data", values);
    },
    validationSchema: ValidationSchema
  });

  return (
    <div className='container'>
      <h1>Youtube Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name"
            name='name'
            id='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        {formik.touched.name && formik.errors.name ? (
          <div className="error mb-2">{formik.errors.name}</div>
        ) : null}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name='email'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

        </Form.Group>
        {formik.touched.email && formik.errors.email ? (
          <div className="error mb-2">{formik.errors.email}</div>
        ) : null}

        <Form.Group className="mb-3">
          <Form.Label>Channel Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your youtube channel name"
            name='channel'
            id='channel'
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        {formik.touched.channel && formik.errors.channel ? (
          <div className="error mb-2">{formik.errors.channel}</div>
        ) : null}
        <Button className='mt-3' type='submit' variant='primary'>Submit</Button>
      </Form>
    </div>
  );
}

export default YoutubeForm;
