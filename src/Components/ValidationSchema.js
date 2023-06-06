import * as Yup from 'yup';

const ValidationSchema=Yup.object({
    name:Yup.string().required('Name is required'),
    email:Yup.string().email("Invalide Email Format").required("Required"),
    channel:Yup.string().required("Email is Required")
})

export default ValidationSchema;
