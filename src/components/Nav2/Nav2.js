import React from 'react';
import styles from './Nav2.module.css';

function Nav2() {
    return (
        <div className='Nav2'>
            <nav className={`${styles.navbar} ${"navbar navbar-light bg-light"}`}>
                <div className={`${styles.containerFluid} ${"container-fluid"}`} >
                    <nav className="navbar-brand">
                        <i className={`${styles.bi} ${"bi bi-chevron-left"}`} href="/"></i>
                        <a className={`${styles.navBrand} ${"navbar-brand"}`} href="/">Volver</a>
                    </nav>
                </div>
            </nav>
        </div>
    );
}

export default Nav2;