import {
  GlobalStyle,
  Navbar,
  NavLinks,
  NavLink,
  NavItem,
  SearchBox,
  RightContainer,
  BrandLogo,
  LoginLink
} from './Styles';

const NavbarHead = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <NavLinks>
          <NavItem>
            <LoginLink href="/login">Login</LoginLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/viewbooks">View Books</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/borrowbooks">Borrow Books</NavLink>
          </NavItem>
        </NavLinks>
        <RightContainer>
          <SearchBox type="text" placeholder="Search for Books" />
        </RightContainer>
        <RightContainer style={{ marginLeft: '20px' }}>
          <BrandLogo src="logo.png" alt="Library Management System Logo" />
        </RightContainer>
      </Navbar>
    </div>
  );
};

export default NavbarHead;
