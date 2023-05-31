import React from 'react';
import {} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import {
    GlobalStyle
  } from '../components/Styles';

const ViewBooks = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            Hello World View Books
            <FooterBottom />
        </div>
    );
};

export default ViewBooks;