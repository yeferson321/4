import { useState, useEffect } from "react"
import { postSignupClient } from '../services/Client';
import { useNavigate } from 'react-router-dom';

export const useForm = (Form) => {

    const [form, setForm] = useState(Form);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState({ email: '', error: '' });
    const [disabledButton, setDisabledButton] = useState(true);
    const [typePassword, setTypePassword] = useState("password");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

    };

    const handleInputCheck = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateName(form, e));
        setErrors(validateEmail(form, e));
        setErrors(validatePassword1(form, e));
        setErrors(validatePassword2(form, e));
    };

    const handleOnkeyup = (e) => {
        handleInputCheck(e);
        setErrors(validateCheckbox(form, e))
    };

    const validateName = (form, e) => {

        if (e.target.name === "name") {
            if (form.name === "") {
                errors.name = "El campo es obligatorio"
            } else if (form.name.search(/^[a-zA-Z\s]+$/)) {
                errors.name = "Solo se permiten letras (a-z)"
            } else {
                errors.name = ""
            }
        }

        return errors;

    }

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

    const validateCheckbox = (form, e) => {
        if (e.target.name === "checkbox") {
            if (form.checkbox === true) {
                errors.checkbox = "El campo es obligatorio"
            } else {
                errors.checkbox = ""
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
        if (errors.name === "" && errors.email === "" && errors.password1 === "" && errors.password2 === "" && errors.checkbox === "") {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    }, [errors.name, errors.email, errors.password1, errors.password2, errors.checkbox]);

    const handleSubmit = (e) => {
        e.preventDefault();

        postSignupClient(form).then((res) => {

            const message = (res.data?.message ?? 'Intente de nuevo')
            const type = (res.data?.type)
            const answer = (res.data?.response ?? false)

            if (answer === true) {

                localStorage.setItem('token', res.data?.token)
                navigate('/welcome');

            } else {

                response.error = ""
                response.email = ""
        
                if (type) {
                    response[type] = message 
                }
                document.getElementById(type).focus();
                console.log(response)
                return response;
                

            }
        })
    };

    return { form, errors, response, disabledButton, typePassword, handleChange, handleBlur, handleOnkeyup, handleSubmit, handleInputCheck, showPassword }

}
