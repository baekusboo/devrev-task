import React from 'react';
import {
    GlobalStyle
  } from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';

const Borrow = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            Hello World Borrow Books
            <FooterBottom />
        </div>
    );
};

export default Borrow;