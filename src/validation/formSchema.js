import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    // size: ,
    // sauce: ,
    // comments: 
})

export default formSchema;