import { React, useContext } from 'react';
import styles from './Nav1.module.css';
import { DataContext } from '../../context/DataContext';
import { Link } from "react-router-dom";
import { AuthService } from '../services/Auth';

function Nav1() {

    const isLoggedIn = useContext(DataContext)
    const { logout } = AuthService();

    return (

        <div className='Nav1'>

            <nav className={`${styles.navbar} ${"navbar navbar-expand-lg"}`}>
                <div className="container-fluid">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Flogo.png?alt=media&token=e9fd9608-c6b1-4c96-9eda-c20e3a1bb2c4" className={`${styles.imgFluid} ${"img-fluid"}`} alt="..." />

                    {isLoggedIn.isLoggedIn ?
                        <a className={`${styles.toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <div className={`${styles.bi}`} ><i className="bi bi-bell"></i></div>
                            <div><img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Ficon.jpg?alt=media&token=06deb95c-8a13-4765-98f2-fb2636f35995" className={`${styles.rounded}`} alt="..." /></div>
                        </a>
                        :
                        <button className={`${styles.navbarToggler} ${"navbarToggler navbar-toggler"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    }

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        {isLoggedIn.isLoggedIn ?
                            <ul className={`${styles.navbarNav} ${"navbar-nav me-auto mb-2 mb-lg-0"}`}>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/welcome">Tu perfil</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/welcome">Configuracion</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/">Inicio Oceane</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} onClick={logout} href="/">Cerrar sesion</a>
                                </li>
                            </ul>
                            :
                            <ul className={`${styles.navbarNav} ${"navbar-nav me-auto mb-2 mb-lg-0"}`}>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/">Home</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/">Features</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${"nav-link"}`} href="/">Pricing</a>
                                </li>
                                <hr className={styles.line}></hr>
                                <li className="nav-item">
                                    <a className={`${styles.navLink} ${styles.navLinkone} ${"navLink nav-link"}`} href="/">Explore</a>
                                </li>
                                <hr className={`${styles.line}`} ></hr>
                            </ul>
                        }

                        {isLoggedIn.isLoggedIn ? null :
                            <span className={`${styles.navbarButton} ${"navbar-text"}`}>
                                <div>
                                    <Link to="/signin">
                                        <button type="button" className={`${styles.btnOne} ${"btn"}`} >Inicia sesion</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/signup">
                                        <button type="button" className={`${styles.btnTwo} ${"btn"}`} >Crear cuenta</button>
                                    </Link>
                                </div>
                            </span>
                        }

                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Nav1;