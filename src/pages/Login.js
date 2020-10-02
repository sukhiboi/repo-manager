import React from 'react';
import Button from './../components/Button';
import styled from 'styled-components';

const LoginPageLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: Roboto;
`;

const AppTitle = styled.span`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  color: black;
`;

const LoginLink = styled.a`
  display: block;
  margin: 1rem auto;
  width: fit-content;
`;

const Login = props => {
  return (
    <LoginPageLayout>
      <AppTitle children='Welcome to Blog' />
      <LoginLink href={process.env.REACT_APP_LOGIN_REDIRECT}>
        <Button text='Login with Github' />
      </LoginLink>
    </LoginPageLayout>
  );
};

export default Login;
