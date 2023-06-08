import * as Yup from 'yup';

const ValidationSchema=Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().email("Invalide Email Format").required("Required"),
    channel:Yup.string().required("channel is Required"),
    address:Yup.string().required("Required"),
    social:Yup.object().shape({
        facebook:Yup.string().required("Required"),
        twitter:Yup.string().required("Required")
    })
})

export default ValidationSchema;
