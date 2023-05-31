import React from 'react';
import {
  GlobalStyle
} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <NavbarHead />
      <div>Library Management System</div>
      <FooterBottom />
    </div>
  );
};

export default Home;
