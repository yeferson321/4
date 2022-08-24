import { useState, useContext, useEffect  } from "react"
import { DataContext } from '../../context/DataContext';

export const useForm = (Form) => {
    
    const {addCode}  = useContext(DataContext);
    const [show, setShow] = useState(true);
    const [math] = useState(Math.random().toString(36).slice(2, 8))
    const [form, setForm] = useState(Form);
    const [code, setCode] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        addCode(code)
    },[code]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateEmail(form, e));
        validateCaptcha(form)
    };

    const validateEmail = (form, e) => {

        if (e.target.name === "captcha") {
            if (form.captcha === "") {
                errors.captcha = "El campo es obligatorio"
            } else {
                errors.captcha = ""
            }
        }

        return errors;

    }

    const validateCaptcha = (form) => {

        if (form.captcha === math) {
            setShow(!show);
            setCode(true)
        }

    }

    return { errors, show, math, handleChange, handleBlur }

}
