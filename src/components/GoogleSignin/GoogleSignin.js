import React, { useState }from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { postSignupGoogleClient } from '../services/Client';
import styles from './GoogleSignin.module.css';
import { useNavigate } from 'react-router-dom';

function GoogleSignin() {

    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const handleGoogleSignin = async () => {
        const googleProvider = new GoogleAuthProvider()
        try {

            await signInWithPopup(auth, googleProvider).then((data) => {

                if (data._tokenResponse && data._tokenResponse.emailVerified === true) {

                    const form = { name: data._tokenResponse.displayName, email: data._tokenResponse.email, password: data._tokenResponse.localId }

                    postSignupGoogleClient(form).then((res) => {

                        const redirect = (res.data?.redirect)
                        const message = (res.data?.message ?? 'Intente de nuevo')
                        const answer = (res.data?.response)
                        const token = (res.data?.token)

                        if (answer === true) {

                            localStorage.setItem('token', token)
                            navigate('/welcome');

                        } else {

                            setResponse(message);

                            if (redirect) {
                                const href = redirect.split("@").join("&");
                                navigate(href);
                            }
                            
                        }
                    })

                } else {
                    setResponse("Intentalo de nuevo")
                }

            })
        } catch (error) {
            setResponse("Intentalo de nuevo")
        }
    }

    return (
        <div>
            <button type="button" className={`${styles.btn} ${"btn btn-outline-secondary"}`} onClick={handleGoogleSignin}><i className={`${styles.bi} ${"bi-google"}`}></i>Continua con google</button>

            <div className={`${styles.mb}`}>
                {response && <div className="alert alert-warning text-center" role="alert">{response}</div>}
            </div>
        </div>
    )
}

export default GoogleSignin
