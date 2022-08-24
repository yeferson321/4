import { useState, useEffect, useContext } from 'react';
import { postForgetPassword } from '../services/Client'
import { DataContext } from '../../context/DataContext';

export const useForm = (Form) => {

    const code = useContext(DataContext)
    const [form, setForm] = useState(Form);
    const [successPassword, setSuccessPassword] = useState(true)
    const [disabledButton, setDisabledButton] = useState();
    const [validitySpinner, setValiditySpinner] = useState(true);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateEmail(form, e));
    };

    const validateEmail = (form, e) => {

        if (e.target.name === "email") {
            if (form.email === "") {
                errors.email = "El campo es obligatorio"
            } else if (form.email.search(/^[a-zA-Z0-9_.+-\ñ]+@[a-zA-Z]+\.[a-zA-Z.]+$/)) {
                errors.email = "Ingrese una dirección de correo electrónico válida, como: sunombre@email.com"
            } else {
                errors.email = ""
            }
        }

        return errors;

    }

    useEffect(() => {
        if (errors.email === "" && code.code === true){
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    });

    const handleSubmit = () => {

        setValiditySpinner(false);

        postForgetPassword(form).then((res) => {

            const message = (res.data?.message ?? 'Intente de nuevo');
            const type = (res.data?.type);
            const answer = (res.data?.response);

            if (answer === true) {

                setValiditySpinner(true);
                setSuccessPassword(false);

            } else if (answer === false) {

                setValiditySpinner(true);
                setResponse(message);
                document.getElementById(type).focus();

            };
        });
    };

    return { form, errors, response, validitySpinner, disabledButton, successPassword, handleChange, handleBlur, handleSubmit };

};
