import React from 'react';
import {StyledContainer,Navbar, NavLinks,NavLink,NavItem,SearchBox,RightContainer,BrandLogo,LoginLink} from '../components/Styles';

const Home = () => {
    return (
        <div>

            <Navbar>
                <NavLinks>

                <NavItem><LoginLink href="#" class="login-link">Login</LoginLink></NavItem>
                <NavItem><NavLink href="#">Home</NavLink></NavItem>
                <NavItem><NavLink href="#">Profile</NavLink></NavItem>
                <NavItem><NavLink href="#">View Books</NavLink></NavItem>
                <NavItem><NavLink href="#">Borrow Books</NavLink></NavItem>

                <NavItem> 
                
                <RightContainer>
                <SearchBox type="text" placeholder="Search for Books">
                </SearchBox>
                </RightContainer>
                
                </NavItem>
                </NavLinks>
            </Navbar>

        </div>
    );
}

export default Home;