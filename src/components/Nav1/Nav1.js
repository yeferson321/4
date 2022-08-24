import React from 'react';
import styles from './Nav1.module.css';

function Nav1() {

    return (

        <div className='Nav1'>
            <nav className={`${styles.navbar} ${"navbar navbar-expand-lg"}`}>
                <div className="container-fluid">
                    <img src="https://firebasestorage.googleapis.com/v0/b/digital-cloud-344020.appspot.com/o/static%2FCaptura_de_pantalla__257_-removebg-preview.png?alt=media&token=1f2bbbdf-7058-4f66-8911-8c11f587320c" className={`${styles.imgFluid} ${"img-fluid"}`} alt="..." />
                    <button className={`${styles.navbarToggler} ${"navbarToggler navbar-toggler"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
                            <hr className={`${styles.line} ${styles.navLinkone}`}  ></hr>
                        </ul>
                        <span className={`${styles.navbarButton} ${"navbar-text"}`}>
                            <div>
                                <a href='/signin'><button type="button" className={`${styles.btnOne} ${"btn"}`} >Inicia sesion</button></a>
                            </div>
                            <div>
                                <a href='/signup'><button type="button" className={`${styles.btnTwo} ${"btn"}`} >Crear cuenta</button></a>
                            </div>
                        </span>
                    </div>
                </div>
            </nav>

            
        </div>
    );
};

export default Nav1;