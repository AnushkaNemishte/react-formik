import * as Yup from 'yup';

const ValidationSchema=Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().email("Invalide Email Format").required("Required"),
    channel:Yup.string().required("channel is Required"),
    address:Yup.string().required("Required"),
    social:Yup.object().shape({
        facebook:Yup.string().required("Required"),
        twitter:Yup.string().required("Required")
    }),
    phoneNumbers: Yup.array().of(
        Yup.string()
          .matches(/^\d{10}$/, "Phone number must be a 10-digit number").required("required")
      )
    
    
})

export default ValidationSchema;
