import { useForm } from './useForm';
import styles from './Signin.module.css';
import GoogleSignin from '../GoogleSignin/GoogleSignin'
import Footer1 from '../Footer1/Footer1';
import Nav2 from '../Nav2/Nav2';

function Signin() {

    const Form = { email: "", password: "" };
    const { form, errors, response, disabledButton, typePassword, handleChange, handleBlur, handleSubmit, showPassword } = useForm(Form);

    return (
        <div className='signin'>
            <Nav2 />

            <div className={`${styles.container}`}>

                <h1 className={styles.h1}>Iniciar sesión</h1>
                <p className={styles.p}>¿Aun no tienes una cuenta? <a href="/signup">Unete.</a></p>

                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="InputEmail" className={`${styles.formLabel} ${"form-label"}`}>Correo electronico</label>
                        <input type="text" className={`${styles.formControl} ${"form-control"}`} aria-describedby="emailHelp"
                            placeholder='No compartimos tu correo electrónico' id='email' name='email'  value={form.email} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                        {errors.email && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.email}</label>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="InputPassword" className={`${styles.formLabel} ${"form-label"}`}>Password contraseña</label>
                        <input type={typePassword} className={`${styles.formControl} ${"form-control"}`} id='password' name='password' value={form.password} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                        {errors.password && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.password}</label>}
                    </div>

                    <div className={`${styles.mb} ${"form-switch"}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={showPassword}  />
                        <label className={`${styles.checkLabel} ${"form-check-label"}`} htmlFor="flexSwitchCheckDefault">Mostrar contraseñas</label>
                    </div>

                    <div className={`${styles.mb}`}>
                        <button htmlFor="submit" className={`${styles.btnPrimary} ${"btn btn-primary"}`} id="btn" disabled={disabledButton}>Continuar</button>
                    </div>

                    <div className={`${styles.mb}`}>
                        {response && <div className="alert alert-warning text-center" role="alert">{response}</div>}
                    </div>

                    <div className={`${styles.mb}`}>
                        <a className={`${styles.forgot}`} href="/forget-password">¿Olvidaste tu contraseña?</a>
                    </div>
                </form>

                <div>
                    <hr className={styles.line}></hr>
                    <h5 className={`${styles.h5}`} >Tambien inicia con</h5>
                    <GoogleSignin />
                </div>

            </div>

            <Footer1 />
        </div>
    );
}

export default Signin;