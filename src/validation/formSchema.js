import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('You must provide your name')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['6"', '12"', '16"', '20"'], 'You must choose a pizza size'),
    sauce: yup
        .string()
        .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'You must choose a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    // TOPPINGS... something like: yup.array(yup.boolean()).compact().min(1).max(3)
    // should include each topping separately
    comments: yup
        .string()
        .max(50, 'maximum of 50 characters allowed')
})

export default formSchema;