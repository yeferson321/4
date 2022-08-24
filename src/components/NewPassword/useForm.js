import { useState, useEffect } from "react"
import { postNewPassword } from '../services/Client';
import { useNavigate } from 'react-router-dom';

export const useForm = (Form) => {

    const [form, setForm] = useState(Form);
    const [errors, setErrors] = useState({});
    const [disabledButton, setDisabledButton] = useState(true);
    const [response, setResponse] = useState(null);
    const [typePassword, setTypePassword] = useState("password")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateEmail(form, e));
        setErrors(validatePassword1(form, e));
        setErrors(validatePassword2(form, e));
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

    const validatePassword1 = (form, e) => {

        if (e.target.name === "password1") {
            if (form.password1 === "") {
                errors.password1 = "El campo es obligatorio"
            } else if (form.password1.search(/^.{8,50}$/)) {
                errors.password1 = "Su contraseña debe tener minimo 8 caracteres"
            } else {
                errors.password1 = ""
            }
        }

        return errors;

    }

    const validatePassword2 = (form, e) => {

        if (e.target.name === "password2") {
            if (form.password2 === "") {
                errors.password2 = "El campo es obligatorio"
            } else if (form.password2 !== form.password1) {
                errors.password2 = "Las contraseñas no coinciden"
            } else {
                errors.password2 = ""
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
        if (errors.email === "" && errors.password1 === "" && errors.password2 === "") {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    },[errors.email, errors.password1, errors.password2]);

    const handleSubmit = (event) => {
        event.preventDefault();

        postNewPassword(form).then((res) => {

            const message = (res.data?.message ?? 'Intente de nuevo')
            const type = (res.data?.type)
            const answer = (res.data?.response)

            if (answer === true) {

                setResponse(message)                 
                setTimeout(function () { navigate('/signin') }, 2000);

            } else if (answer === false) {

                setResponse(message)
                document.getElementById(type).focus();

            }
        })

    }

    return { form, errors, response, disabledButton, typePassword, handleChange, handleBlur, handleSubmit, showPassword }

}