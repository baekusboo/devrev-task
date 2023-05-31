import React from 'react';
import {} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import {
    GlobalStyle
  } from '../components/Styles';

const Profile = () => {
    return (
        <div>
            <GlobalStyle />
            <NavbarHead />
            Hello World Profile
            <FooterBottom />
        </div>
    );
};

export default Profile;