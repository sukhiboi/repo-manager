import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const LoaderLayout = styled.div`
  display: block;
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 50%;
  border: 5px solid #333;
  border-bottom-color: #fff;
  animation: ${LoaderAnimation} 1.5s infinite linear;
`;

const LoadingText = styled.div`
  font-family: Roboto;
  font-weight: 500;
  margin: 10px 0;
  font-size: 2rem;
`;

const Loader = props => (
  <LoaderContainer>
    <LoaderLayout />
    <LoadingText>Loading</LoadingText>
  </LoaderContainer>
);

export default Loader;
