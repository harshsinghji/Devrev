import {
  FooterHeadContainer,
  FooterHeadText,

} from './Styles';

const FooterBottom = () => {
    return (
      
        <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Library Management System. Made by Harshdeep Singh.
            </FooterHeadText>
        </FooterHeadContainer>
    );
  };
  
export default FooterBottom;
