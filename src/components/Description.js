import React from 'react';
import styled from 'styled-components';

const DescriptionLayout = styled.p`
  line-height: 1.4;
  font-size: 1rem;
  font-family: Roboto;
  width: 100%;
  min-height: 4rem;
  margin: 4px 0 8px;
`;

const Description = ({ chars, text }) => {
  const desc = text.length <= chars ? text : `${text.slice(0, chars)} ...`;
  return <DescriptionLayout>{desc}</DescriptionLayout>;
};

export default Description;
