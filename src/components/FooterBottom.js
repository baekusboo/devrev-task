import {
  GlobalStyle,
  FooterHeadContainer,
  FooterHeadText
} from './Styles';

const FooterBottom = () => {
    return (
        <div>
        <GlobalStyle />
        <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Library Management System
            </FooterHeadText>
        </FooterHeadContainer>
      </div>
    );
  };
  
export default FooterBottom;
