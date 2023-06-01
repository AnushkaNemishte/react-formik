import React from 'react';
import { Button, Form } from "react-bootstrap"
import { useFormik } from "formik"

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: ""
    },
    onSubmit:(values)=>{
      console.log("Form data",values)
    }
  })
 
  return (
    <div className='container'>
      <h1>Youtube Form</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"
            placeholder="Enter the name "
            name='name'
            id='name'
            value={formik.values.name}
            onChange={formik.handleChange}

          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            placeholder="name@example.com"
            name='email'
            id='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Channel Name</Form.Label>
          <Form.Control type="text"
            placeholder="Enter your youtube channel name"
            name='channel'
            id='channel'
            value={formik.values.channel}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </div>

  );
}

export default YoutubeForm;
