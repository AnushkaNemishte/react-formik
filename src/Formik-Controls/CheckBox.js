import { ErrorMessage, Field } from 'formik';
import React from 'react'
import TextError from './TextError';

function CheckBox(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div className="form-group">
      <label>{label}</label>
      <Field name={name} className="form-control mb-3" {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="form-check" key={option.value}>
                <input
                  type="checkbox"
                  id={option.value}
                  className="form-check-input"
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value} className="form-check-label">
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
    <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default CheckBox
