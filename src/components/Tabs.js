import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  max-width: 100%;
  width: 100%;
  max-height: 20vh;
  overflow: hidden;
`;

const Ul = styled.ul`
    -webkit-text-size-adjust: 100%;
    color: #74777b;
    padding: 0;
`;

export default function Tabs(props) {
  return (
    <Nav className='sticky bottom-0'>
      <Ul className='flex justify-center text-center list-none'>
        {props.children}
      </Ul>
    </Nav>
  )
}
