import React, { useEffect } from 'react';
import { postGetDataClient } from '../services/Client';
import Nav4 from '../Nav4/Nav4';
import { useState } from "react";
import styles from './DatosUser.module.css';


function DatosUser() {

    const [datos, setDatos] = useState();

    useEffect(() => {
        postGetDataClient().then((res) => {
            setDatos(res.data.message)
        })
    }, []);

    return (
        <div className='Expired'>
            <Nav4 />

            <div className={`${styles.row} ${"row"}`}>
                {datos?.map(dato =>
                    <div className={`${styles.col} ${"col-sm-6"}`} key={dato._id}>
                        <div className="col-sm-6" key={dato._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{dato.name.toUpperCase()}</h5>
                                    <p className="card-text">{dato.email}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>

        </div>
    );
}

export default DatosUser;
