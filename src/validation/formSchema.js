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
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    driedTomatos: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    gummyBears: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    comments: yup
        .string()
        .max(100, 'maximum of 100 characters allowed')
})

export default formSchema;