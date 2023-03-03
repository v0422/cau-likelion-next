import React, { ReactElement } from 'react';
import styled from 'styled-components';

import LayoutLogin from '@common/layout/LayoutLogin';
import ContentsSection from 'src/components/login/contents/ContentsSection';
import BorderSection from 'src/components/login/border/BorderSection';

const Login = () => {
  return (
    <StWrapper>
      <StContentsWrapper>
        <ContentsSection />
      </StContentsWrapper>
      <StBorderWrapper>
        <BorderSection />
      </StBorderWrapper>
    </StWrapper>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Login;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1440px) {
    padding: 100px 250px 100px 250px;
  }
  @media (max-width: 1280px) {
    padding: 100px 150px 100px 150px;
  }
  padding: 100px 360px 100px 360px;
  @media (max-width: 900px) {
    padding: 0px;
    width: 100%;
    height: 100%;
  }
`;

const StContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100rem;
  padding-top: 10rem;

  width: 120rem;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;

const StBorderWrapper = styled.div`
  position: absolute;
  width: 120rem;
  height: 100rem;
  padding-top: 10rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
