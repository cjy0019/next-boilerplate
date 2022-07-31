import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const index = () => {
  return (
    <Container>
      <Image src="/images/nextJS.png" height={200} width={300} />
      <h1>Hello, Next!</h1>
      <Image src="/svg/yellowstar.svg" height={30} width={30} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  height: 100vh;
  font-size: 1.875rem;
  color: ${palette.gray_f7};
  background-color: ${palette.gray_48};
`;

export default index;
