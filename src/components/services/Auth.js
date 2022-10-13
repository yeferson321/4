//import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';
import { useState  } from 'react';

export const AuthService = () => {

    const navigate = useNavigate();

    //método que nos permitirá chequear si existe un token, en tal
    //caso retornará true
    const checkToken = () => {
        return !!localStorage.getItem('token');
    }

    //método que nos permite establecer el token en el almacenamiento local
    const login = (token, userName) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
    }; 

    //método que nos permite eliminar el token en el almacenamiento local
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
   
    };

    return { login, logout, checkToken }

}
