import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

function RadioButton(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className='form-group mb-3'>
            <label>{label}</label>
            <Field name={name} {...rest} className="form-control">
                {
                    ({ field }) => {
                        console.log("field",field)
                        return options.map((option) => {
                            return (
                                <div key={option.key} className="form-check ">
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label" htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>

        </div>
    );
}

export default RadioButton;
