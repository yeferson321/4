import { Route, Routes } from "react-router-dom";
import './App.css';
// Css bootstrap min //
import "bootstrap/dist/css/bootstrap.min.css";
// JavaScript bootstrap Bundle with Popper //
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DataProvider from './context/DataContext'
import Opening from './components/Opening/Opening';
import Check from './components/Check/Check';
import SigninGoogle from './components/SigninGoogle/SigninGoogle';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Welcome from './components/Welcome/Welcome';
import Expired from './components/Expired/Expired';
import ForgetPassword from './components/ForgetPassword/Forget';
import Newpassword from './components/NewPassword/Newpassword';

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/check" element={<Check />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin/email=:email" element={<SigninGoogle />} />
        <Route path="/forget-password" element={<ForgetPassword/>} /> 
        <Route path="/new-password/:token" element={<Newpassword/>} /> 
        <Route path="/welcome" element={<Welcome /> } />
        <Route path="/expired" element={<Expired />} />
        <Route path="*" element={<Opening />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
