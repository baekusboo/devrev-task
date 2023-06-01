import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import addbutton from "../images/add.png";

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
  opacity:0.8;
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

export const FooterHeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 4%;
  background: #167D7F;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  opacity:0.8;
`;

export const FooterHeadText = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 80px; 
  
`;

export const HeadTitle = styled.h1`
  padding-left: 50px;
  color: #167D7F;
  text-align: center;
  text-transform: capitalize;
  margin-top: 80px;
`;

export const HeadDescription = styled.p`
  width: 80%;
  line-height: 30px;
  padding-left: 50px;
  margin-top: 30px;
  color: #29A0B1;
  font-size: 16px;

`;

export const Title = styled.h2`
  color: #167D7F;
  opacity: 0.9;
  padding-left: 0;
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 500px;
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

  &::-webkit-scrollbar {
    display: none; 
  }

  @media screen and (max-width: 768px) {
    .CardContainer {
      flex-wrap: nowrap;
    }
  }

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

export const BookCard = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

export const BookName = styled.h2`
font-size: 18px;
margin-bottom: 5px;
color: #29A0B1 ;
`;

export const BooksViewList = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const BookDescription = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  opacity: 0.8;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BookBody = styled.div`
  flex: 1;
`;

export const BookImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 20px;
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

export const CardName = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 60%;
`;

export const CardDescription = styled.p`
  color: #000;
  opacity: 0.8;
  margin: 5px 0;
  font-weight: 500;
  font-size: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
  margin-right: 10px;
  color: #29A0B1;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-left: 1px solid #98D7C2;
  background: transparent;
  outline: none;
  height: 30px;
  color: #29A0B1;
  width: 250px;
  font-weight: 500;
  
  &::placeholder {
    color: #98D7C2;
  }
`;

export const Button = styled.button`
  background-color: #167D7F;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: #29A0B1;
  }

  &:focus {
    outline: none;
  }
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
  color: #000;
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
    background-image:url(${addbutton});
    background-size: cover;
    transform: scale(0.4);
    transition: transform 0.3s ease; 
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  &:hover:before {
    transform: scale(0.5); 
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
  background: #98D7C2;
  opacity:0.5;

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
  background: #98D7C2;
  opacity:0.5;

  img {
    width: 15px;
    height: 20px;
    opacity: 0;
  }

  &:hover img {
    opacity: 1;
  }
`;

export const FilterContainer = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
  justifyContent: flex-end;
`;


