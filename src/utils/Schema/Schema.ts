import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is a required field")  
    .matches(/^[A-Z]/, "Name must start with a capital letter"),    
  phone: yup
    .string()
    .required("Phone number is a required field"),  
  email: yup
    .string()
    .email("Invalid email format")  
    .required("Email is a required field"),  
  message: yup
    .string()
    .required("Message is a required field"),  
  acceptTerms: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms of Service and Privacy Policy')  
    .required('You must accept the Terms of Service and Privacy Policy'),   
});
