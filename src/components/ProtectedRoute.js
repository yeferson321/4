import { Navigate, Outlet } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const ProtectetedRouter = ({children, redirectTo="/" }) => {

    const token = localStorage.getItem('token')
    const isMyTokenExpired = isExpired(token);
    //const myDecodedToken = decodeToken(token);

    if (!token || isMyTokenExpired === true){
        return <Navigate to={redirectTo} />
    }

    return <Outlet/>
}

export default ProtectetedRouter;