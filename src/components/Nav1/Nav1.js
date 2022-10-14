import { React, useContext } from 'react';
import styles from './Nav1.module.css';
import { Link } from "react-router-dom";
import { AuthService } from '../services/Auth';
import { DataContext } from '../../context/DataContext';

function Nav1() {

    const { isLoggedIn } = useContext(DataContext);
    const { logout } = AuthService();

    return (

        <div className='Nav1'>

            {isLoggedIn ?

                <nav className={`${styles.navbarTwo} ${"navbar bg-light"}`}>
                    <div className="container-fluid">
                        <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Flogo2.png?alt=media&token=65078781-c9ca-45fe-905d-eeb24cef8b84" className={`${styles.imgFluid} ${"imgFluid img-fluid"}`} alt="..." />
                        <a className={`${styles.toggler}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <div className={`${styles.bi}`} ><i className="bi bi-bell"></i></div>
                            <div><img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Ficon.jpg?alt=media&token=06deb95c-8a13-4765-98f2-fb2636f35995" className={`${styles.rounded}`} alt="..." /></div>
                        </a>
                        <div className={`${styles.offcanvas} ${"offcanvas offcanvas-end"}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className={`${styles.offcanvasHeader} ${"offcanvas-header"}`}>
                                <h6 className={`${styles.offcanvasTitle} ${"offcanvas-title"}`} id="offcanvasNavbarLabel">{localStorage.getItem('userName')}</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1">
                                    <li className="nav-item">
                                        <a className={`${styles.navLink} ${"nav-link"}`} href="/welcome">Tu perfil</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`${styles.navLink} ${"nav-link"}`} href="/welcome">Configuracion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`${styles.navLink} ${"nav-link"}`} href="/">Inicio Oceane</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`${styles.navLink} ${"nav-link"}`} onClick={logout} href="/">Cerrar sesion</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                :

                <nav className={`${styles.navbar} ${"navbar navbar-expand-lg"}`}>
                    <div className="container-fluid">
                        <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Flogo.png?alt=media&token=e9fd9608-c6b1-4c96-9eda-c20e3a1bb2c4" className={`${styles.imgFluid} ${"img-fluid"}`} alt="..." />
                        <a className={`${styles.navbarToggler} ${"navbarToggler navbar-toggler"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
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
                        </div>
                    </div>
                </nav>



            }

        </div>

    );
};

export default Nav1;