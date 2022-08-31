import React from 'react';
import styles from './Nav1.module.css';
import { Link } from "react-router-dom";

function Nav1() {

    return (

        <div className='Nav1'>
            <nav className={`${styles.navbar} ${"navbar navbar-expand-lg"}`}>
                <div className="container-fluid">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apideployusers.appspot.com/o/static_files%2Ficon-preview.svg?alt=media&token=51146283-4aea-41c3-b1ab-3af7044b67eb" className={`${styles.imgFluid} ${"img-fluid"}`} alt="..." />
                    <button className={`${styles.navbarToggler} ${"navbarToggler navbar-toggler"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className={`${styles.navbarNav} ${"navbar-nav me-auto mb-2 mb-lg-0"}`}>
                            <li className="nav-item">
                                <a className={`${styles.navLink} ${"nav-link"}`} href="/">Home</a>
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <a className={`${styles.navLink} ${"nav-link"}`} href="/">Features</a>
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <a className={`${styles.navLink} ${"nav-link"}`} href="/">Pricing</a>
                            </li>
                            <hr></hr>
                            <li className="nav-item">
                                <a className={`${styles.navLink} ${"navLink nav-link"}`} href="/">Explore</a>
                            </li>
                            <hr></hr>
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

        </div>

    );
};

export default Nav1;