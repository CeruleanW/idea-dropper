import React from 'react';
import NextjsImage from 'next/image';
import styled from 'styled-components';

const StyledImage = styled(NextjsImage)`
  background-color: #525252; // fallback
`;

export function Image(props) {
  return (
    <StyledImage {...props} />
  )
}
