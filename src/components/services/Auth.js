//import { isExpired, decodeToken } from "react-jwt";

export const AuthService = () => {

    const login = (token) => {
        localStorage.setItem('token', token);
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    const verifyToken = () => {
        //const token = localStorage.getItem('token');
        //const validityToken = (isExpired(token));
    };

    return { login, logout, verifyToken }

}
