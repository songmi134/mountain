import React, { useEffect } from 'react';
import '../../index.css';
import 'firebase/auth';
import { Container, Title } from './Login.style';
import {ui, uiConfig} from '../../auth/firebaseAuth';

const Login = () => {

  useEffect(() => {
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
      <>
        <Container>
          <Title>로그인</Title>
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
        </Container>
    </>
  );
}

export default Login;