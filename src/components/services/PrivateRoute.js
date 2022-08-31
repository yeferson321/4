import { Navigate, Route, Routes } from "react-router";
import Expired from '../Expired/Expired';

const PrivateRoute = (props) => {

    return (
        <Route {...props}/>
    );
    
};

export default PrivateRoute;