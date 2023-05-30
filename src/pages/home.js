import React from 'react';
import {
  GlobalStyle,
  StyledContainer,
  Navbar,
  NavLinks,
  NavLink,
  NavItem,
  SearchBox,
  RightContainer,
  BrandLogo,
  LoginLink
} from '../components/Styles';

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <NavLinks>
          <NavItem>
            <LoginLink href="#">Login</LoginLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">View Books</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Borrow Books</NavLink>
          </NavItem>
        </NavLinks>
        <RightContainer>
          <SearchBox type="text" placeholder="Search for Books" />
        </RightContainer>
        <RightContainer style={{ marginLeft: '20px' }}>
          <BrandLogo src="logo.png" alt="Library Management System Logo" />
        </RightContainer>
      </Navbar>

      <div>Library Management System</div>
    </div>
  );
};

export default Home;
