import styled from 'styled-components';
import { Logoimg, Playstore, Appstore } from '../assets/images/index';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  color: #000000;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

const LeftImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const RightContent = styled.div`
  display: flex;
`;

const RightImage = styled.img`
  width: 100px;
  height: 40px;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftContent>
        <LeftImage src={Logoimg} alt='Left Image' />
        <span>@ Mc Donald 2024</span>
      </LeftContent>
      <RightContent>
        <RightImage src={Playstore} alt='Right Image 1' />
        <RightImage src={Appstore} alt='Right Image 2' />
      </RightContent>
    </FooterContainer>
  );
};

export default Footer;
