import React from 'react';
import palette from '../styles/palette';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export const NoMarginP = styled.p`
  margin: 0;
`;

export function Nav(props) {
  const { isMenuOpened, setIsMenuOpened, title } = props;
  return (
    <nav
      className='w-full flex p-4'
      style={{
        backgroundColor: palette.primary,
      }}
    >
      <button className='h-full'>
        <FontAwesomeIcon
          icon={faBars}
          size='1x'
          fixedWidth
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        />
      </button>
      <NoMarginP className='flex-auto text-center text-2xl'>{title}</NoMarginP>
      <button className='h-full'>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size='1x'
          fixedWidth
          onClick={() => console.log('ellipsis clicked')}
        />
      </button>
    </nav>
  );
}
