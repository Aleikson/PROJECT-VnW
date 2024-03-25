import styled from 'styled-components';
import { Logoimg, Firstbtnimg, Secondbtnimg } from '../assets/images/index';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffff;
  color: white;
`;

const BoxLogo = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;

const Logo = styled.img`
  width: 130px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 165px;
  border: 0;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  color: #000000;
  background-color: ${(props) => props.customBg || '#FFC72C'};

  &:hover {
    opacity: 70%;
    border: 1px solid #ffc116;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <BoxLogo>
        <Logo src={Logoimg} alt='Logo' />
      </BoxLogo>
      <Nav>
        <NavLink customBg='transparent'>
          <span href='#'>Baixe o App</span>
          <img src={Firstbtnimg} />
        </NavLink>
        <NavLink>
          <span href='#'>Peça seu Méqui</span>
          <img src={Secondbtnimg} />
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
