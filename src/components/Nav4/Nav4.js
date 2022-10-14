import React from 'react';
import styles from './Nav4.module.css';
import { AuthService } from '../services/Auth';

function Nav4() {

    const { logout } = AuthService();

    return (

        <div className='Nav4'>
            <nav className={`${styles.navbar} ${"navbar bg-light fixed-top"}`}>
                <div className="container-fluid">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Flogo2.png?alt=media&token=65078781-c9ca-45fe-905d-eeb24cef8b84" className={`${styles.imgFluid} ${"img-fluid"}`} alt="..." />
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
        </div>

    );
}

export default Nav4;