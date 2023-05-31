import React from 'react';
import {} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import {
    GlobalStyle
  } from '../components/Styles';


const Login = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            Hello World Login
            <FooterBottom />
        </div>
    );
};

export default Login;