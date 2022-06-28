// import { useEffect, useState } from "react";
// // import validation from "../pages/Login";

// const useForm=(submitForm: (arg0: boolean) => void)=>{
// const [values, setValues] = useState({
//     fullName: "",
//     email: "",
//     password: "",
// });

// const [errors, setErrors] = useState([]);
// const [dataIsCorrect, setDataIsCorrect] = useState(false);

// const handleChange = (event: { target: { name: any; value: any; }; }) => {
//     setValues({
//         ...values,
//         [event.target.name]: event.target.value,
//     });
// };

// const handleFormSubmit = (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     setErrors(validation(values));
//     setDataIsCorrect(true);
// };
// useEffect(() => {
//     if (Object.keys(errors).length === 0 && dataIsCorrect) {
//         submitForm(true)
//     }
// }, [errors])

// return {handleChange, handleFormSubmit,  errors, values}
// }

// export default useForm;
