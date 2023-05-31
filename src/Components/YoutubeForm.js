import React from 'react';
import { Form } from "react-bootstrap"
function YoutubeForm() {
  return (
    <div className='container'>
      <div className='form-header'>
        <h1>YouTube Registration</h1>
        <p>YouTube Registration Form !!!</p>
        <div className='form-body'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>  Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>  Email Address </Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>  Channel </Form.Label>
              <Form.Control type="text" placeholder="Enter Channel " />
            </Form.Group>
          </Form>
        </div>
      </div>

    </div>
  );
}

export default YoutubeForm;
