import { useForm } from './useForm';
import styles from './Check.module.css';

const Check = () =>  {

    const Form = { captcha: "" };
    const { errors, show, math, handleChange, handleBlur } = useForm(Form);

    return (

        <div className='check'>

            <div className={styles.container}>

                <div className="mb-3 text-center">
                    <label htmlFor="exampleInputPassword1" className={`${styles.formLabel} ${"form-label"}`} >Captcha de verificacion</label>
                    <input className={`${styles.formControl} ${"form-control text-center"}`} type="text" placeholder={math} aria-label="Disabled input example"
                        disabled></input>
                </div>

                {show ? (
                    <div className={`${styles.mb} ${"text-center"}`}>
                        <label htmlFor="exampleInputPassword1" className={`${styles.formLabel} ${"form-label"}`} >Confirmar captcha de verificacion</label>
                        <input type="text" className={`${styles.formControl} ${"form-control text-center"}`} id="formLabel" name='captcha' style={{}} onKeyUp={handleBlur} onBlur={handleBlur} onChange={handleChange} required />
                        {errors.captcha && <label className={`${styles.validity} ${"form-label"}`} style={{ color: "#f67d7d" }} >{errors.captcha}</label>}
                    </div>
                ) : (
                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputPassword1" className={`${styles.formLabel} ${"form-label"}`} >Codigo correcto</label>
                    </div>
                )}
                    

            </div>

        </div>
    );
}

export default Check;