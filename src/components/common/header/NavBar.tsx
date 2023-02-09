import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import CAULogo from '@image/cau사자.png';
import NavBarButton from './NavButton';
import { BackgroundColor } from '@utils/constant/color';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { accessToken } from '@utils/state';
import HoverButton from './HoverButton';

const NavBar = () => {
  const [tokenState, setTokenState] = useRecoilState(accessToken);
  const hoverMenu = [{ title: '아카이빙' }, { title: '세션', routing: '/session' }, { title: '추억', routing: '/gallery' }];


  return (
    <Wrapper>
      <LogoWrapper>
        <Link href={'/'}>
          <LogoImage>
            <Image src={CAULogo} width={'50px'} height={'50px'} alt="로고 이미지" />
          </LogoImage>
        </Link>
        <Link href={'/'}>
          <Title>LIKELION</Title>
        </Link>
      </LogoWrapper>
      <ButtonWrapper>
        <HoverButton menu={hoverMenu} />
        <NavBarButton title={'프로젝트'} routing={'/project'} />
        {tokenState && <NavBarButton title='출석체크' routing={'/attendance'} />}
        <NavBarButton title={tokenState ? 'MY' : 'Log in'} routing={tokenState ? '/mypage' : '/login'} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  @media(max-width: 1440px) {
    padding: 0 250px;
  }
  @media(max-width: 1280px) {
    padding: 0 150px;
  }
  padding: 0 360px;
  align-items: center;
  justify-content: space-between;
  background-color: ${BackgroundColor};
  z-index: 9999;
`;

const LogoImage = styled.div`
min-width: 50px;
min-height: 50px;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;