import React, { useState } from 'react';
import { useForm } from '../NewPassword/useForm';
import { useParams } from 'react-router';
import styles from './Newpassword.module.css';
import Footer1 from '../Footer1/Footer1';
import Nav2 from '../Nav2/Nav2';
import { isExpired } from "react-jwt";

function Newpassword() {

    let params = useParams();
    const [token] = useState(params.token);
    const Form = { email: '', password1: '', password2: '', token: token }
    const { errors, response, disabledButton, typePassword, handleChange, handleBlur, handleSubmit, showPassword } = useForm(Form);
    const [validityToken] = useState(isExpired(params.token));

    return (
        <div className='Newpassword'>
            <Nav2 />
            {validityToken ? (
                <div className={`${styles.containerTwo}`}>
                    <p className={styles.p}>Los enlaces de restablecimiento de contraseña caducan después de 10 minutos. Genere uno nuevo en la página de olvidaste tu contraseña.</p>
                    <a className={`${styles.btnPrimary} ${styles.btnPrimarytwo} ${"btn btn-primary"}`} href="/" role="button">Volver al inicio</a>
                </div>
            ) : (
                <div className={`${styles.container} ${"container"}`}>

                    <h1 className={styles.h1}>Restablecer la contraseña</h1>
                    <p className={styles.p}>Ingrese su correo electrónico registrado y su nueva contraseña</p>

                    <form className={`${styles.form} ${"form"}`} onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className={`${styles.formLabel} ${"form-label"}`}>Correo electronico</label>
                            <input type="text" id='email' className={`${styles.formControl} ${"form-control"}`} aria-describedby="emailHelp"
                                placeholder="No compartimos tu correo con nadie" name='email' onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                            {errors.email && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.email}</label>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className={`${styles.formLabel} ${"form-label"}`}>Nueva contraseña</label>
                            <input type={typePassword} id='password1' className={`${styles.formControl} ${"form-control"}`} name='password1' onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                            {errors.password1 && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.password1}</label>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className={`${styles.formLabel} ${"form-label"}`}>Confirma contraseña nueva</label>
                            <input type={typePassword} id='password2' className={`${styles.formControl} ${"form-control"}`} name='password2' onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                            {errors.password2 && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.password2}</label>}
                        </div>

                        <div className={`${styles.switch} ${"form-switch"}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={showPassword} />
                            <label className={`${styles.checkLabel} ${"form-check-label"}`} htmlFor="flexSwitchCheckDefault">Mostrar contraseñas</label>
                        </div>

                        <button htmlFor="submit" className={`${styles.btnPrimary} ${"btn btn-primary"}`} disabled={disabledButton} id="btn">Continuar</button>

                        <div className={`${styles.mb}`}>
                            {response && <div className="alert alert-warning text-center" role="alert">{response}</div>}
                        </div>

                    </form>

                </div>
            )}

            <Footer1 />
        </div>
    )
}

export default Newpassword