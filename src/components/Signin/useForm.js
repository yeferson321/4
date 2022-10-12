import { useState } from "react"
import { postSigninClient } from '../services/Client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/Auth';

export const useForm = (Form) => {

    const { login } = AuthService();
    const [form, setForm] = useState(Form);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);
    const [disabledButton, setDisabledButton] = useState(true);
    const [typePassword, setTypePassword] = useState("password");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateEmail(form, e));
        setErrors(validatePassword(form, e));
    };

    const validateEmail = (form, e) => {

        if (e.target.name === "email") {
            if (form.email === "") {
                errors.email = "El campo es obligatorio"
            } else if (form.email.search(/^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z.]+$/)) {
                errors.email = "Ingrese una dirección de correo electrónico válida, como: sunombre@email.com"
            } else {
                errors.email = ""
            }
        }

        return errors;

    }

    const validatePassword = (form, e) => {

        if (e.target.name === "password") {
            if (form.password === "") {
                errors.password = "El campo es obligatorio"
            } else {
                errors.password = ""
            }
        }

        return errors;

    }

    const showPassword = () => {
        if (typePassword === "password") {
            setTypePassword("text")
        } else {
            setTypePassword("password")
        }
    }

    useEffect(() => {
        if (errors.email === "" && errors.password === "") {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }, [errors.email, errors.password]);

    const handleSubmit = (e) => {
        e.preventDefault();

        postSigninClient(form).then((res) => {

            const message = (res.data?.message ?? 'Intente de nuevo')
            const type = (res.data?.type)
            const answer = (res.data?.response)

            if (answer === true) {

                login(res.data?.token)
                navigate('/welcome');

            } else {

                setResponse(message)
                document.getElementById(type).focus();

            }
        })
    };

    return { form, errors, response, disabledButton, typePassword, handleChange, handleBlur, handleSubmit, showPassword }

}
