import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faBoxOpen,
  faChalkboard,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { third } from '../styles/palette';

const Li = styled.li`
  color: #74777b;
  border: 2px solid rgba(40, 44, 42, 0.1);
  z-index: 1;
  padding: 0.2rem;
  max-width: 100%;
  max-height: 100%;

  ${({ active }) =>
    active &&
    `
    border-top-color: ${third};
    border-top-width: 0.4rem;
  `}
`;

function Icon(props) {
  const iconType = props.type;
  const size = '2x';
  const Layout = (props) => (
    <div className='flex justify-center h-10'>{props.children}</div>
  );

  switch (iconType) {
    case 'box':
      return (
        <Layout>
          <FontAwesomeIcon icon={faBoxOpen} size={size} aria-hidden />
        </Layout>
      );
    case 'add':
      return (
        <Layout>
          <FontAwesomeIcon icon={faPlusCircle} size={size} aria-hidden />
        </Layout>
      );
    case 'board':
      return (
        <Layout>
          <FontAwesomeIcon icon={faChalkboard} size={size} aria-hidden className='overflow-hidden' />
        </Layout>
      );
  }

  return null;
}

const StyledIcon = styled(Icon)`
  outline: none;
  white-space: nowrap;
  padding: 0.65em 0 0.5em;
  line-height: 1;
  transition: color 0.2s;
  background: none;
  box-shadow: inset 0 3px 0 ${third};
  color: ${third};
`;

const Span = styled.span`
  -webkit-text-size-adjust: 100%;
  font-family: 'Raleway', Arial, sans-serif;
  white-space: nowrap;
  line-height: 1;
  vertical-align: middle;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 0.8rem;
`;

// 
// UI style: https://tympanus.net/Development/TabStylesInspiration/
// 
export default function Tab(props) {
  const { type, text, active } = props;
  let link;
  switch (type) {
    case 'box':
      link = '/boxes';
      break;
    case 'add':
      link = '/newcard';
      break;
    case 'board':
      link = '/board';
      break;
  }

  return (
    <Link href={link}>
      <Li
        active={active}
        className='flex-auto h-full text-center cursor-pointer'
      >
        <StyledIcon type={type} />
        {text ? <Span>{text}</Span> : <Span>{type}</Span>}
        {props.children}
      </Li>
    </Link>
  );
}
