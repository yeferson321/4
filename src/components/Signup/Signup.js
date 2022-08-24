import { useForm } from '../Signup/useForm';
import Footer1 from '../Footer1/Footer1';
import Nav2 from '../Nav2/Nav2';
import GoogleSignin from '../GoogleSignin/GoogleSignin'
import styles from './Signup.module.css';

function Signup() {
    
    const Form = { name: '', email: '', password1: '', password2: '', checkbox: '' }
    const { form, errors, response, disabledButton, typePassword, handleChange, handleBlur, handleOnkeyup,  handleSubmit, handleInputCheck, showPassword } = useForm(Form);

    return (
        <div className='Registration'>
            <Nav2 />

            <div className={styles.container}>

                <h1 className={styles.h1}>Crear cuenta</h1>
                <p className={styles.p}>¿Ya tienes una cuenta? <a className='link' href="/signin">Inicia sesión.</a></p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="inputName" className={`${styles.formLabel} ${"form-label"}`} >Nombre completo</label>
                        <input type="text" className={`${styles.formControl} ${"form-control"}`}
                            name='name' id='name' value={form.name} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} />
                        {errors.name && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.name}</label>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className={`${styles.formLabel} ${"form-label"}`}>Correo electronico</label>
                        <input type="text" className={`${styles.formControl} ${"form-control"}`} aria-describedby="emailHelp"
                            placeholder='No compartimos tu correo electrónico' name='email' id='email' value={form.email} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} />
                        {errors.email && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.email}</label>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className={`${styles.formLabel} ${"form-label"}`}>Contraseña</label>
                        <input type={typePassword} className={`${styles.formControl} ${"form-control"}`}
                            name='password1' id='password1' value={form.password1} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} />
                        {errors.password1 && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.password1}</label>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputPassword" className={`${styles.formLabel} ${"form-label"}`} >Confirmar contraseña</label>
                        <input type={typePassword} className={`${styles.formControl} ${"form-control"}`}
                            name='password2' id='password2' value={form.password2} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} />
                        {errors.password2 && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.password2}</label>}
                    </div>

                    <div className={`${styles.mb} ${"form-switch"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={showPassword} />
                        <label className={`${styles.checkLabel} ${"form-check-label"}`} htmlFor="flexSwitchCheckDefault">Mostrar contraseñas</label>
                    </div>

                    <div className={`${styles.mb} ${"form-switch"}`}>
                        <input className="form-check-input" type="checkbox" id="checkbox" name='checkbox' onClick={handleOnkeyup} onChange={handleInputCheck} />
                        <label className={`${styles.checkLabel} ${"form-check-label"}`} htmlFor="flexSwitchCheckDefault">Al registrarte confirmas que has leido los <a className='link'
                            href="/">Terminos y Condiciones</a></label>
                        {errors.checkbox && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.checkbox}</label>}
                    </div>

                    <div className={`${styles.mb}`}>
                        <button htmlFor="submit" className={`${styles.btnPrimary} ${"btn btn-primary"}`} id="btn" disabled={disabledButton}>Continuar</button>
                    </div>

                    <div className={`${styles.mb}`}>
                        {response && <div className="alert alert-warning text-center" role="alert">{response}</div>}
                    </div>

                </form>

                <div>
                    <hr className={styles.line}></hr>
                    <h5 className={`${styles.h5}`}>Tambien registrate con</h5>
                    <GoogleSignin />
                </div>

            </div>
            <Footer1 />
        </div>
    );
}

export default Signup;