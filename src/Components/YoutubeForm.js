import React from 'react';
import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import ValidationSchema from './ValidationSchema';
import TextError from './TextError';

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: ""
  },
  phoneNumbers: ["", ""],
  phNumbers: [''],
}

const onSubmit = (values,onSubmitProps) => {
  console.log("Form data", values)
  onSubmitProps.resetForm()
}


function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
      validateOnMount
     
    >
      {
        (formikProps) => {
          console.log("formikProps",formikProps)
          return(
            <div className='container'>
            <h1>Youtube Form</h1>
            <Form >
              <div className='form-group mb-3'>
                <label htmlFor="name">Name</label>
                <Field type="text"
                  className='form-control'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name'
                />
                <ErrorMessage name='name' component={TextError} />
              </div>

              <div className='form-group mb-3'>
                <label htmlFor="email">Email</label>
                <Field type="email"
                  className='form-control'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email'
                />
                <ErrorMessage name='email' component={TextError} />
              </div>


              <div className='form-group mb-3'>
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  className='form-control'
                  name='channel'
                  id='channel'
                  placeholder='Enter Your Channel Name'
                />
                <ErrorMessage name='channel' component={TextError} />
              </div>

              <div className='form-group mb-3'>
                <label htmlFor="comments">Comments</label>
                <Field
                  as="textarea"
                  className='form-control'
                  name='comments'
                  id='comments'
                  placeholder='Enter Comments'
                />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {
                    (props) => {
                      const { field, meta, form } = props
                      console.log("props", props)
                      return (
                        <div>
                          <input className='form-control' id='address' {...field} placeholder='Enter your Address' />
                          {meta.touched && meta.error ?
                            <div className='error'>{meta.error}</div> : null}
                        </div>
                      )
                    }
                  }
                </Field>
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="facebook">FB Profile</label>
                <Field
                  type="text"
                  className='form-control'
                  name='social.facebook'
                  id='facebook'
                  placeholder='Enter URL'
                />
                <ErrorMessage name='social.facebook' component={TextError} />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="twitter">Twitter Profile</label>
                <Field
                  type="text"
                  className='form-control'
                  name='social.twitter'
                  id='twitter'
                  placeholder='Enter URL'
                />
                <ErrorMessage name='social.twitter' component={TextError} />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="primaryph">Primary Phone Number</label>
                <Field
                  type="text"
                  className='form-control'
                  name="phoneNumbers[0]"
                  id="primaryph"
                  placeholder="Enter Primary Phone number"
                />
                <ErrorMessage name='phoneNumbers[0]' component={TextError} />
              </div>
              <div className='form-group mb-3'>
                <label htmlFor="emergencyph">Emergency Phone Number</label>
                <Field
                  type="text"
                  className='form-control'
                  name="phoneNumbers[1]"
                  id="emergencyph"
                  placeholder="Enter Emergency Phone number"
                />
                <ErrorMessage name='phoneNumbers[1]' component={TextError} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phNumbers">List of Phone Numbers </label>
                <FieldArray name='phNumbers'>
                  {
                    (FieldArrayProps) => {
                      console.log("fieldprops", FieldArrayProps);
                      const { push, remove, form } = FieldArrayProps
                      const { values } = form
                      const { phNumbers } = values
                      return <div>
                        {
                          phNumbers.map((phNumber, index) => (
                            <div key={index}>
                              <Field name={`phNumbers[${index}]`} />
                              {
                                index > 0 && <Button variant='danger' onClick={() => remove(index)}>-</Button>
                              }
                              <Button variant='success' onClick={() => push('')}>+</Button>

                            </div>
                          )
                          )
                        }
                      </div>
                    }
                  }
                </FieldArray>
              </div>
              <Button className='mt-3' type='submit' disabled={!formikProps.isValid} variant='primary'>Submit</Button>
            </Form>
          </div>
          )
         
        }
      }

    </Formik>
  );
}

export default YoutubeForm;
