import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: #DDFFE7;
    position: relative;
    font-family: roboto, sans-serif;
  }
`;

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DDFFE7 ;
    background-size: cover;
    background-attachment: fixed;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 4%;
  background: #167D7F;
  z-index: 9;
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled.img`
  height: 50px;
`;

export const NavLinks = styled.ul`
  margin-top: 10px;
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  text-transform: capitalize;
  opacity: 0.9;
`;

export const RightContainer = styled.div`
  display: block;
  margin-left: auto;
`;

export const SearchBox = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 30px;
  color: #fff;
  width: 250px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s;

  &::placeholder {
    color: #98D7C2;
  }

  &:focus {
    border-color: #98D7C2;
    width: 400px;
  }
`;

export const LoginLink = styled.a`
  color: #fff;
  opacity: 0.9;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const BookTitle = styled.h1`
  padding-left: 50px;
  text-transform: capitalize;
  margin-top: 80px;
`;

export const BookDescription = styled.p`
  width: 80%;
  line-height: 30px;
  padding-left: 50px;
  margin-top: 30px;
  opacity: 0.8;
`;

export const Title = styled.h2`
  color: #fff;
  opacity: 0.9;
  padding-left: 4%;
  text-transform: capitalize;
  font-size: 22px;
  font-weight: 500;
`;

export const BooksList = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  margin: 10px 0 20px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 92%;
  padding-left: 10px;
  height: 220px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
`;

export const Card = styled.div`
  position: relative;
  min-width: 150px;
  width: 150px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 10px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(4, 8, 15, 0), #98D7C2 90%);
  padding: 10px;
  transition: 0.5s;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const Name = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
  margin-top: 60%;
`;

export const Description = styled.p`
  color: #fff;
  opacity: 0.8;
  margin: 5px 0;
  font-weight: 500;
  font-size: 12px;
`;

export const BorrowListButton = styled.button`
  position: relative;
  width: 100%;
  text-transform: capitalize;
  background: none;
  border: none;
  outline: none;
  font-weight: 500;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
  margin: 5px 0;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -5px;
    height: 35px;
    width: 35px;
    background-image: url(images/add.png);
    background-size: cover;
    transform: scale(0.4);
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PreviousButton = styled.button`
  position: absolute;
  top: 0;
  width: 5%;
  height: 100%;
  z-index: 2;
  border: none;
  outline: none;
  cursor: pointer;
  left: 0;
  background: linear-gradient(to right, #167D7F 0%, #167D7F00);

  img {
    width: 15px;
    height: 20px;
    opacity: 0;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 0;
  width: 5%;
  height: 100%;
  z-index: 2;
  border: none;
  outline: none;
  cursor: pointer;
  right: 0;
  background: linear-gradient(to left, #167D7F 0%, #167D7F00);

  img {
    width: 15px;
    height: 20px;
    opacity: 0;
  }

  &:hover img {
    opacity: 1;
  }
`;
