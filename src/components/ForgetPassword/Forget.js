import { useForm } from './useForm';
import styles from './Forget.module.css';
import Footer1 from '../Footer1/Footer1';
import Nav2 from '../Nav2/Nav2';
import Check from '../Check/Check.js';

const Forget = () => {


    const Form = { email: "" };
    const { form, errors, response, validitySpinner, disabledButton, successPassword, handleChange, handleBlur, handleSubmit } = useForm(Form);

    return (
        <div className='Nav2'>
            <Nav2 />
            <div className={`${styles.container}`}>

                {successPassword ? (
                    <div>
                        <h1 className={styles.h1}>¿Tienes problemas para iniciar sesión?</h1>
                        <p className={styles.p}>Le enviaremos un enlace a su correo para restablecer su contraseña.</p>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className={`${styles.formLabel} ${"form-label"}`}>Correo electronico</label>
                            <input type="text" id='email' className={`${styles.formControl} ${"form-control"}`} aria-describedby="emailHelp"
                                placeholder='No compartimos tu correo electrónico' name="email" onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                            {errors.email && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.email}</label>}
                        </div>

                        <Check />

                        {validitySpinner ? (<button htmlFor="submit" className={`${styles.btnPrimary} ${"btn btn-primary"}`} id="btn" disabled={disabledButton} onClick={handleSubmit}>Enviar corro electronico</button>) : (
                            <div className={`${styles.spinner} ${"d-flex justify-content-center"}`}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>)}

                        <div className={`${styles.mb}`}>
                            {response && <div className="alert alert-warning text-center" role="alert">{response}</div>}
                        </div>
                    </div>
                ) : (
                    <div className={`${styles.containerTwo}`}>
                        <h1 className={styles.h1}>Mensaje enviado</h1>
                        <p className={styles.p}>Se le ha enviado un enlace para restablecer su contraseña a {form.email}</p>
                        <a className={`${styles.btnPrimary} ${"btn btn-primary"}`} href="/signin" role="button">Volver a inicio de sesion</a>
                    </div>
                )}

            </div>
            <Footer1 />
        </div>
    );
}

export default Forget;