import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const samRegExp=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

 export const FormSchema= Yup.object({
    Name:Yup.string().required("Name is must"),
    age:Yup.string().required("Age is must"),
    sex:Yup.string().required("select is must"),
    email:Yup.string().email(),

    Mobile_Number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),

    Emergency_Number:Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
    Govt_ID:Yup.string().matches(samRegExp, 'Govt ID is not valid').min(12, "too short").max(14, "too long")


});